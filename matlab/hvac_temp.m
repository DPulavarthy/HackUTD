% Declare variables.
totalYears = 10; % Total years.
numDataPoints = 100; % Number of data points (adjust as needed).
years = linspace(1, 10, numDataPoints); % Simulated years range.
targetTemperatures = zeros(1, numDataPoints); % Array to store the time it takes to reach the target temperature.

% Initialize parameters.
earlyStartYear = 1; % Year at which the initial range starts.
earlyLowRangeStart = 5; % Initial range for time (minutes).
earlyLowRangeEnd = 10; % Final range for time (minutes).
lateStartYear = 7; % Year at which the slope increases.
lateLowRangeStart = 30; % Start of the final range (minutes).
lateLowRangeEnd = 40; % End of the final range (minutes).

% Simulate degradation of the HVAC system over time with randomness and slope.
for t = 1:numDataPoints
    % Calculate the time it takes to reach the set temperature with random fluctuations and slope.
    if years(t) < lateStartYear
        
        % Linear degradation with randomness and slope for the early phase.
        randomFluctuation = (earlyLowRangeEnd - earlyLowRangeStart) * rand();

        % Adjust the slope (2) for the early phase.
        targetTemperatures(t) = (earlyLowRangeStart + randomFluctuation) + years(t) * 2; 
    else

        % Linear degradation with randomness and slope for the late phase.
        randomFluctuation = (lateLowRangeEnd - lateLowRangeStart) * rand();
        % Adjust the slope (5) for the late phase.
        targetTemperatures(t) = (lateLowRangeStart + randomFluctuation) + (years(t) - lateStartYear) * 5; 
    end
end

% Plot the results.
figure;
plot(years, targetTemperatures, 'b', 'LineWidth', 2);
xlabel('Years');
ylabel('Time to Reach Set Temperature (minutes)');
title('HVAC System (8 Years)');
grid on;

% Customize the axes to show year intervals.
xticks(1:10);
xticklabels(1:10);

% Store the data in a CSV file.
data = [years', targetTemperatures'];
csvwrite('hvac_temp.csv', data);

% Save the graph as a PNG file.
saveas(gcf, 'hvac_temp.png');
