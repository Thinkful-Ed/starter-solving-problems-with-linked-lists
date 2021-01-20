# The Josephus Problem

To create a circular list the last node in the list should point to the head of the list.

Use a circular list to solve the following problem.

The [Josephus Problem](https://en.wikipedia.org/wiki/Josephus_problem) is defined like this:

> People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed.

> The problem — given the number of people, starting point, direction, and number to be skipped — is to choose the position in the initial circle to avoid execution.

Write an algorithm that accepts a list of persons, n - the number of persons, and m - the number to be skipped and returns the name of the last person left alive.
