#include <iostream>
#include <string>
using namespace std;

class Car {
private:
    string brand;
    int speed;
    bool isRunning;

public:
    // Constructor
    Car(string b) {
        brand = b;
        speed = 0;
        isRunning = false;
    }

    // Start the car
    void start() {
        if (isRunning) {
            cout << brand << " is already running." << endl;
        } else {
            isRunning = true;
            cout << brand << " has started." << endl;
        }
    }

    // Stop the car
    void stop() {
        if (!isRunning) {
            cout << brand << " is already stopped." << endl;
        } else {
            isRunning = false;
            speed = 0; // Reset speed when stopping
            cout << brand << " has stopped." << endl;
        }
    }

    // Accelerate the car
    void accelerate(int increment) {
        if (!isRunning) {
            cout << "Start the car first!" << endl;
            return;
        }

        speed += increment;

        if (speed > 180) {
            speed = 180;
        }

        cout << "Current Speed: " << speed << " km/h" << endl;
    }

    // Apply brakes
    void brake(int decrement) {
        if (!isRunning) {
            cout << "Start the car first!" << endl;
            return;
        }

        if (speed == 0) {
            cout << "Car is already at rest." << endl;
            return;
        }

        speed -= decrement;

        if (speed < 0) {
            speed = 0;
        }

        cout << "Current Speed: " << speed << " km/h" << endl;
    }

    // Display car status
    void showStatus() {
        cout << "\n----- Car Status -----" << endl;
        cout << "Brand : " << brand << endl;
        cout << "Engine: " << (isRunning ? "Running" : "Stopped") << endl;
        cout << "Speed : " << speed << " km/h" << endl;
    }
};

int main() {
    Car car("Toyota");

    car.showStatus();

    car.start();

    car.accelerate(30);
    car.accelerate(50);
    car.accelerate(120); // Speed will be capped at 180

    car.brake(40);
    car.brake(200); // Speed will not go below 0

    car.stop();

    car.showStatus();

    return 0;
}