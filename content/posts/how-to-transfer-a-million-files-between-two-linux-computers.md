---
title: How to transfer a million files between two Linux computers
description: >-
  My goal is transferring a million images from a linux server to my local
  computer fast and efficiently
date: 2020-09-07T19:25:58.352Z
published: true
cover_image: /images/uploads/template-2-.jpg
tags:
  - Machine Learning
content: >-
  It is pretty usual that when you want to run your Machine Learning project,
  you need to download or transfer the dataset form somewhere to your local
  machine or any machine you want to run your project.


  So, it would be so important to learn how we can copy a big dataset from
  another computer to our local computer on Linux.


  One of the simplest ways to transfer files on Linux is using the "SCP"
  command. So, let's get more into it:


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

  * **\[user@]DEST_HOST:]file2**: the location of the destination file or
  directory should mention here.

  * **The colon (:)**: shows the difference between local and remote locations.


  Sometimes the address of host files is not as simple and clear as we expect
  so, in this case, using "[tree"
  command](https://maryambafandkar.me/linux-tree-command) can be SO helpful to
  find the location of data you need to work on it for your project.


  When copying a source file to a target file which already exists, scp will
  replace the contents of the target file (keeping the inode).


  If the target file does not yet exist, an empty file with the target file name
  is created, then filled with the source file contents. No attempt is made at
  "near-atomic" transfer using temporary files.


  ## **SCP Options**


  There are some options to help us to use the SCP command effectively.


  Let’s review some parameters of SCP command.


  * \-P(Capital P) - Specifies the remote host ssh port.

  * \-p - Preserves files modification and access times, and modes from the
  original files.

  * \-q - Use this option if you want to suppress the progress meter and
  non-error messages.

  * \-C - This option forces the SCP to compresses the data as it is sent to the
  destination machine.

  * \-r - This option allows the SCP to copy all files and directories of the
  host address.


  ## Example of using SCP


  1. Copy file from a Linux server to a local computer or vice versa.
     ```
     scp username@remote:/file/to/send /where/to/put/local-machine
     ```
  2. Copy file between two remote hosts.
     ```
     scp username@remote_1:/file/to/send username@remote_2:/where/to/put
     ```
  3. Using -r option to copy all file and directory of the host address.
     ```
     scp -r username@remote_host:/file/to/send username@remote_des:/where
     ```

  Sometimes, the files you want to copy from the host are not at the same folder
  or directory, so we need to repeat SCP command for different locations,
  instead of repeating the SCP command we can _**make a bash file**_ containing
  the several SCP commands for the different host address.


  ## SCP and authentication


  The SCP command works on ssh to transfer data, so it requires an ssh key or
  password to authenticate on the remote systems.


  For transferring files, it reads permissions on the source file and copies
  permission on the target machine.


  It is interesting to know that SCP will **overwrite files** (if the name of
  files for the host and destination was the same) without any warning.


  You may also want to set up an **SSH key-based authentication** and connect to
  your Linux servers without entering a password. Please review **this post** to
  learn a method to get rid of typing your passwords while multiple SCP commands
  are running. 


  ## Conclusion


  In this post, you learned how to use the SCP Linux command to copy files and
  directories from the host machine to destination machine. we revied some
  important parameters of the SCP command to make using it more effectively.
---

