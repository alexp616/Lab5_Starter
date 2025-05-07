# Lab 5 - Starter
Done solo by Alex Pan

expose.html: [https://alexp616.github.io/Lab5_Starter/expose.html](https://alexp616.github.io/Lab5_Starter/expose.html)

explore.html: [https://alexp616.github.io/Lab5_Starter/explore.html](https://alexp616.github.io/Lab5_Starter/explore.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because there are too many components - whether the message is too long, if the message is empty, if the message contains unsupported characters, whether the receiver actually received the message, if the message is the same on the receiver's end.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, since this is a lot more specific. A sender bot can automatically send a message longer than 80 characters and the test is just whether or not the receiver bot received the message or not.
