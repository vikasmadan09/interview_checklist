// HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity.
// If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending for a trailing number of days, they send the client a notification about potential fraud.
// The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

// Given the number of trailing days d and a client's total daily expenditures for a period of n days, determine the number of times the client will receive a notification over all n days.

// Example
// expenditure = [10, 20, 30, 40, 50]
// d = 3

// On the first three days, they just collect spending data. At day 4, trailing expenditures are [10,20,30]. The median is  and the day's expenditure is 40. Because 40 >= 2 x 20, there will be a notice. The next day, trailing expenditures are [20,30,40] and the expenditures are 50.
// This is less than 2 x 30 so no notice will be sent. Over the period, there was one notice sent.

// Note: The median of a list of numbers can be found by first sorting the numbers ascending. If there is an odd number of values, the middle one is picked. If there is an even number of values, the median is then defined to be the average of the two middle values. (Wikipedia)

// Function Description

// Complete the function activityNotifications in the editor below.

// activityNotifications has the following parameter(s):

// int expenditure[n]: daily expenditures
// int d: the lookback days for median spending

// Returns
// int: the number of notices sent

// Input Format

// The first line contains two space-separated integers n and d, the number of days of transaction data, and the number of trailing days' data used to calculate median spending respectively.
// The second line contains n space-separated non-negative integers where each integer i denotes expenditure[i].

// Constraints
// 1 <= n <= 2 x 10 ^ 5
// 1 <= d <= n
// 0 <= expenditure[i] <= 200

// Output Format

// Sample Input 0

// STDIN               Function
// -----               --------
// 9 5                 expenditure[] size n =9, d = 5
// 2 3 4 2 3 6 8 4 5   expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]

// Sample Output 0
// 2

// Explanation 0

// Determine the total number of notifications the client receives over a period of n = 9 days.
// For the first five days, the customer receives no notifications because the bank has insufficient transaction data: notifications = 0.

// On the sixth day, the bank has d = 5 days of prior transaction data,{2,3,4,2,3} , and median = 3 dollars. The client spends 6 dollars, which triggers a notification because 6>=2 x median: notifications = 0+1 = 1.

// On the seventh day, the bank has d = 5 days of prior transaction data,{3,4,2,3,6} , and median = 3 dollars. The client spends 8 dollars, which triggers a notification because 8>=2 x median: notifications = 1+1 = 2.

// On the eighth day, the bank has d = 5 days of prior transaction data,{4,2,3,6,8} , and median = 4 dollars. The client spends 4 dollars, which triggers a notification because 4<2 x median: notifications = 2.

// On the ninth day, the bank has d = 5 days of prior transaction data,{2,3,6,8,4} , and median = 4 dollars. The client spends 8 dollars, which triggers a notification because 5<2 x median: notifications = 2.

// Sample Input 1
// 5 4
// 1 2 3 4 4

// Sample Output 1
// 0

// There are 4 days of data required so the first day a notice might go out is day 5. Our trailing expenditures are [1,2,3,4] with a median of 2.5 The client spends 4 which is less than 2 x 2.5 so no notification is sent.

function activityNotification(exp, d) {
  let notify = 0;
  // set midpoints for median calculations
  const [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2;
  // initialize count sorted sub array
  let count = Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) {
    count[exp[i]]++;
  }
  // iterate through expenditures
  for (let i = d; i < exp.length; i++) {
    // find median
    for (let j = 0, k = 0; k <= i1; k += count[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += count[j], j++) m2 = j;
    let m = (m1 + m2) / 2;

    // check if notification is given
    if (exp[i] >= m * 2) notify++;
    //   Replace sub array elements
    count[exp[i - d]]--;
    count[exp[d]]++;
  }
  return notify;
}
console.log(activityNotification([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)); // 2
console.log(activityNotification([1, 2, 3, 4, 4], 4)); // 0
console.log(activityNotification([10, 20, 30, 40, 50], 3)); //1
