#include <iostream>
using namespace std;

class Solution {
public:
    int sum(int a, int b) {
        return a + b;
    }
};

// Example usage
int main() {
    Solution solution;
    cout << solution.sum(2, 3) << endl;  // Output: 5
    return 0;
}