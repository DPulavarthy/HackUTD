% Declare variables
initialCapacity = 100; % kWh.
totalYears = 8; % Total years.
numDataPoints = 365 * totalYears; % Number of data points (one data point per day).
days = 1:numDataPoints; % Days range.

% Calculate the linear degradation rate to achieve a 70% capacity loss over 8 years.
finalCapacity = initialCapacity * 0.3; % 70% capacity loss.
linearDegradationRate = (initialCapacity - finalCapacity) / numDataPoints; % Linear degradation rate.

% Vary the degradation rate to make it more linear at the beginning and fluctuate more as it progresses.
degradationRate = zeros(1, numDataPoints);

% Linear degradation for the first half.
linearPeriod = floor(numDataPoints / 2);
degradationRate(1:linearPeriod) = (linearDegradationRate / linearPeriod) * (1:linearPeriod);

% Simulated fluctuations for the second half.
for t = linearPeriod + 1:numDataPoints

    % Simulated daily fluctuation between 90% and 110%.
    randomFluctuation = 0.9 + 0.2 * rand(1, 1); 
    degradationRate(t) = linearDegradationRate + (linearDegradationRate * (1 - randomFluctuation));
end

% Capacity array.
capacity = zeros(1, numDataPoints);

% Simulate battery capacity degradation over 8 years with varying degradation rate.
for t = 1:numDataPoints
    if t == 1
        capacity(t) = initialCapacity;
    else
        capacity(t) = capacity(t - 1) - degradationRate(t);
    end

    % Ensure capacity does not go below zero.
    if capacity(t) < 0
        capacity(t) = 0;
    end
end

% Plot the results.
figure;
plot(days, capacity, 'b', 'LineWidth', 2);
xlabel('Days');
ylabel('Battery Capacity (kWh)');
title('Battery Capacity (8 years)');
grid on;

% Store the data in a CSV file.
data = [days', capacity'];
csvwrite('battery_max_capacity.csv', data);

% Save the graph as a PNG file.
saveas(gcf, 'brake_max_capacity.png');
