---
title: Making an interesting bash file
description: 'I mentioned the word of "interesting" for making bash files
  because It’s the most efficient shell scripting language. '
date: 2020-09-07T19:25:58.352Z
published: true
cover_image: /images/uploads/linux-bash-maryam-bafandkar.jpg
tags:
  - Machine Learning
  - Linux
  - Bash-Scripts
  - SCP
content: >-
  I mentioned the word "interesting" for making bash files because It’s the most
  efficient shell scripting language. It gives you the easiest way to automate
  things. If you want to work on Linux systems then you should know how the
  shell works. In this post, I am just trying to explain shortly what is a bash
  script and how we can create a bash file.


  ## What is a bash script on Linux?


  A Bash script is a plain text file which contains a series of commands. These commands are a mixture of commands we would normally type on the command line (such as ls or cp for example) and commands. 


  Anything you can run normally on the command line can be put into a script and it will do exactly the same thing. Similarly, anything you can put into a script can also be run normally on the command line and it will do exactly the same thing.


  ## What is the advantage of running a bash file?


  Pretty good question, because if there is no differences between running a bash file containing the normal commands and the typing the same command on the console, What's the reason of making a bash file?!


  Let's answer the question by the practical example.


  As I mentioned on the previous post about **transferring file between two linux computers,** sometimes you need to repeat the SCP command to transfer files from different addresses on the host machine to the target machine, in this case instead of typing these following command 


  ```shell

  $ scp username@remote_host:/file1/to/send .

  $ scp username@remote_host:/file2/to/send .

  $ scp username@remote_host:/file3/to/send .

  ```


  we can just put all that repetitive and annoying commands with different addresses into a script and we just need to run it, like :


  ```

  $ ./yourbashfilename.sh

  ```


  It is so simple and clear!


  You can organize your commands on different bash files.


  ## How can we make a bash file?


  I am going to explain a simple and basic way to make a bash file.


  1. Using `nano` command to create and edit the script file.


  ```
   $ nano example.sh
  ```


  It is common to give files that are Bash scripts an extension of .sh (example.sh for example). Linux is an extensionless system so a script doesn't necessarily work without extensions.


  2. Making a file as an executable file
     adding the **shebang (#!)** at the top of the script. In Linux systems, a text file with a shebang is interpreted as an executable file. You can confirm where the bash interpreter is located with **which** command.
  3. Adding the output of Which command on top of the file
     For example, the output of which is `#!bin/bash`, we should add it to the top of the example file

     ```
      #!bin/bash
     ```
  4. It is time to make an amazing bash file including several SCP commands 

     ```
      #!bin/bash
      scp username@remote_host:/file1/to/send .
      scp username@remote_host:/file2/to/send .
      scp username@remote_host:/file3/to/send .
     ```
  5. Press ctrl+x to save the file, so example.sh is already build.

  6. To make example.sh executable as we expect to run it like ./example.sh, we should make it executable.

     ```
     $ chmod +x example.sh
     ```
  7. Now, you can run example.sh directly.

     ```
     $ ./example.sh
     ```

  ## Conclusion


  I hope this post has been helpful and practical for you to get started with bash scripting in Linux. The concept of having a script that has complete access to anything on a Linux computer was initially a complicated thought for me, but once I got familiar to it I found it SO useful and efficient.


  References: 

  https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php
---
