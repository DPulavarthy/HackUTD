% Declare variables.
initialThickness = 12; % mm.
totalMiles = 90; % thousand miles.
distance = 1:totalMiles; % distance range.
thickness = zeros(1, totalMiles); % thickness array.
dangerousLevel = 6; % dangerous mm threshold.
degradationRate = (initialThickness - 3) / totalMiles; % The world accurate degradation rate.
randomDegradationRange = 0.1; % Simulated degradation rate.

% Simulate brake pad degradation over 90k miles.
for t = 1:totalMiles
    dailyDegradation = -randomDegradationRange + 2 * randomDegradationRange * rand;
    thickness(t) = initialThickness - degradationRate * t + dailyDegradation;

    if thickness(t) < dangerousLevel
        dailyDegradation = -randomDegradationRange + 2 * randomDegradationRange * (rand - 2);
        thickness(t) = initialThickness - degradationRate * t + dailyDegradation;
    end
    
    % Ensure thickness does not go below a certain minimum in the simulation.
    if thickness(t) < 3
        thickness(t) = 3;
    end
end

% Create a matrix for the data.
data = [distance; thickness]';

% Save the data to a CSV file.
csvwrite('brake_pad_thickness.csv', data);

% Plot the results.
figure;
plot(distance, thickness, 'b', 'LineWidth', 2);
xlabel('Distance (in thousand miles)');
ylabel('Thickness (mm)');
title('Brake Pad Thickness (90,000 Miles)');
grid on;

% Add a horizontal line for the dangerous level.
hold on;
plot([1, totalMiles], [dangerousLevel, dangerousLevel], 'r--', 'LineWidth', 1.5);
legend('Brake Pad Thickness', 'Dangerous Level');

% Save the graph as a PNG file.
saveas(gcf, 'brake_pad_thickness.png');
