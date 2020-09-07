---
title: How to transfer a million files between two Linux computers
description: >-
  My goal is transferring a million images from a linux server to my local
  computer fast and efficiently
date: 2020-09-07T19:25:58.352Z
published: true
cover_image: false
tags:
  - Machine Learning
content: >-
  My goal is transferring a million images from a linux server to my local
  computer. It is pretty usual that when you want to run your Machine Learning
  project, you need to download or transferr the dataset form somewhere to your
  local machine or any machine you want to run your project.


  So I believe it is so important to learn how we can copy a big dataset from
  another computer to our local computer on Linux.


  One of the simplest ways to transfer files on Linux is using "SCP" command.


  So, lets get more into it:


  ## SCP, Secure Copy Linux Command


  SCP (secure copy) is a command-line utility that allows you to securely copy
  files and directories between two locations. SCP copies files between hosts on
  a network. It uses ssh for data transfer, and uses the same authentication and
  provides the same security as ssh.


  With SCP, you can copy a file or directory:


  * From your local system to a remote system.

  * From a remote system to your local system.

  * Between two remote systems from your local system.


  When transferring data with SCP, both the files and password are encrypted
  that's why we call it secure copy command.


  ## SCP Command Syntax


  The following form is the basic synatx of using SCP.


  ```

  scp [OPTION] [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2

  ```


  * **Option**: it includes cipher, ssh configuration, ssh port, limit,
  recursive copy and so on.

  * **\[user@]SRC_HOST:]file1**: it contains the address of the host files.


  Sometimes the address of host files are not as simple and clear as we expect
  so, in this case, using "[tree"
  command](https://maryambafandkar.me/linux-tree-command) can be so helpful to
  find the location of data you need to work on it for your project.


  When copying a source file to a target file which already exists, scp will
  replace the contents of the target file (keeping the inode).


  If the target file does not yet exist, an empty file with the target file name
  is created, then filled with the source file contents. No attempt is made at
  "near-atomic" transfer using temporary files.


  In this tutorial, we will show you how to use the scp command through
  practical examples and detailed explanations of the most common scp options

   )check the address of files on the mabda, To brows file (link) “tree” command is a great option.

  2)After finding the location of files, we can use scp command to copy files
  from our mabda to maghsad.


  Lets get more into this step.




  Here is the way we can use SCP commanad,


  SCP mabda maghsad




  There are some parameters to help us to use these command easily.


  Let’s review some parameters of SCP command.


  .


  .


  .




  Sometimes you the files you want to copy from are not at the same folder or
  directory, so we need to repeat SCP command for different locations
---

