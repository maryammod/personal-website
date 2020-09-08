---
title: Making an interesting bash file
description: >-
  I mentioned the word of "interesting" for making bash files because It’s the
  most efficient shell scripting language. 
date: 2020-09-07T19:25:58.352Z
published: true
cover_image: false
tags:
  - Machine Learning
content: >-
  I mentioned the word of "interesting" for making bash files because It’s the
  most efficient shell scripting language. It gives you the easiest way to
  automate things. If you want to work on linux systems then you should know how
  the shell works. In this post, I am just trying to explain what is a bash
  script and how we can create a bash file.


  ## What is a bash script on Linux?


  A Bash script is a plain text file which contains a series of commands. These
  commands are a mixture of commands we would normally type on the command line
  (such as ls or cp for example) and commands. 


  Anything you can run normally on the command line can be put into a script and
  it will do exactly the same thing. Similarly, anything you can put into a
  script can also be run normally on the command line and it will do exactly the
  same thing.


  ## What is the advantage of running a bash file?


  Pretty good question, because if there is no differences between running a
  bash file containing the normal commands and the typing the same command on
  the console, What's the reason of making a bash file?!


  Let's answer the question by the practical example.


  As I mentioned on the previous post about **transferring file between two
  linux computers,** sometimes you need to repeat the SCP command to transfer
  files from different addresses on the host machine to the target machine, in
  this case instead of typing these following command 


  ```

  scp  username@remote_host:/file1/to/send .scp 
  username@remote_host:/file2/to/send .scp  username@remote_host:/file3/to/send
  .

  ```


  we can just put all that repatative and annoying commands with different
  addresses into a script and we just need to run it, like :


  ```

  ./yourbashfilename.sh

  ```


  It is so simple and clear!


  You can organize your commands on different bash files.


  ## How can we make a bash file?


  I am going to explain a simple and basic way to make a bash file.


  1. Using "nano" command to create and edit the script file.
     1. ```
        nano example.sh
        ```
  2. Making a file as an executable file
     1. adding the **shebang (#!)** at the top of the script. In Linux systems, a text file with a shebang is interpreted as an executable file. You can confirm where the bash interpreter is located with **which bash**.
  3. Adding the output of Which command on top of the file
     1. For example, the output of which is "#!bin/bash ", we should add it to the top of the example file
     2. ```
        #!bin/bash
        ```



  It is convention to give files that are Bash scripts an extension of .sh
  (myscript.sh for example). As you would be aware (and if you're not maybe you
  should consider reviewing our Linux Tutorial), Linux is an extensionless
  system so a script doesn't necessarily have to have this characteristic in
  order to work.


  most of time we need to run a repetitive several command lines for doing a
  specific job, for instance: instead of writing these 3 command lines for
  copying files from different host locations, we can just run a bash file
  containing that commands.




  So, we just run this on the console.




  ./yourbashfilename.bash








  A good question arises, how we can make a bash file on Linux. 




  H2- bash file








  H2- Example of a bash file








  H2- Conclusion




  Refrences: 


  https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php
---

