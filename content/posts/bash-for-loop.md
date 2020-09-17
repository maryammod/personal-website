---
title: Bash For Loop
description: " The goal is that transferring files from different hosts to the
  one destination."
date: 2020-09-17T18:15:42.515Z
published: true
cover_image: /images/uploads/maryanbafandkar-machinelearning.jpg
tags:
  - Bash-Scripts
  - Linux
  - SCP
content: >-
  In scripting languages such as Bash, loops are very helpful for automating
  repetitive tasks.


  There are three basic loop constructs in Bash scripting, "for loop", "while loop", "until loop".


  In this post, I will cover the basics of "for loops" in Bash. 


  The goal is that transferring files from different hosts to the one destination.


  ## The Standard Syntax `for` Loop


  The `for` loop iterates over a list of items and performs the given set of commands.


  ```

  for item in [LIST]

  do
    [COMMANDS]
  done

  ```


  The list can be a series of strings separated by spaces, a range of numbers, output of a command, an array, and so on.


  ## Loop Over Strings


  Since, our goal is transferring files from different directories or even different host machine to one destination, we just need to consider the location of the files as list of strings and run this following code.




  ```sh

  h1=/host1-adr/files

  h2=/host2-adr/files

  h3=/host3-adr/files

  des=/the-adr-destination

  for adr in $h1 $h2 $h3

  do
   scr -r $adr/* $des
  done

  ```


  \

  Your you can consider the different host locations as an array and use the for loop like this:


  ```

  hosts=('/host1-adr/files' '/host2-adr/files' )

  des=/the-adr-destination

  for adr in "${hosts[@]}"

  do
   scr -r $adr/* $des
  done

  ```


  It is so simple and fun, when you want to repeat so many commands that can be written by a nice for-loop with less code.


  If you have any questions or feedback, feel free to leave a comment.
---
