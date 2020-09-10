---
title: Get ride of SCP problems by rsync command
description: We are transferring a huge number of files from a remote Linux
  machine to our local Linux system.
date: 2020-09-08T15:23:03.089Z
published: true
cover_image: /images/uploads/scp-errors.jpg
tags:
  - Linux
  - SCP
content: >-
  We are transferring a huge number of files from a remote Linux machine to our
  local Linux system.


  So far, based on the previous posts, I used SCP Linux command but I faced a wide range of difficulties, I'll explain it in detail on this article. I found another useful Linux command for transferring files help us to move the files easier and much faster, ' **Rsync**' Linux command.


  Let's review some problem of using SCP and learning more about using the "Rsync" command and its advantages.


  ## SCP Problem


  Using SCP to transfer files in a Linux host and they fail. There are errors in the filetransfer_log similar to:


  * lost connection

  * connection refused

  * transfer to primary and secondary host failed or there is only primary and transfer to it failed


  In most cases when you want to move a few files you barely see that errors but for several SCP commands and moving a huge number of files, it is pretty common to face that errors.


  That errors stop file transferring and when you want to fix it, you need to run it from scratch to make sure all files will be transferred which it is not efficient. you can use watch command, though.


  **Watch command** tells you how many files are in a specific folder to make sure how many files are already transferred. (you can take a look at **watch** Linux command post)


  ## Cause


  The remote host is configured to receive a maximum amount of connections that SSH can handle. This limit is too low for the number of appliances that are concurrently sending data.


  ## Solution


  I read some articles to handle the SCP file transferring errors, I briefly explain the solutions:


  * increasing the MaxStartups parameter on the remote host 

  * try SCP in verbose mode


  I personally decided to change the SCP command to RSYNC one.


  **The Rsync command**


  Rsync (Remote Sync) is used for transferring and synchronizing files and directories remotely as well as locally in Linux systems. 

  With the help of the Rsync command, you can copy and synchronize your data remotely and locally across directories, across disks and networks, perform data backups and mirroring between two Linux machines.To learn more about Rsync command and how to use it, please review Rsync command post.


  ## **The advantageous of using Rsync**

     1. **Synchronized transferring**

  The advantage of using Rsync is that instead of copying data blindly, it compares the source and the destination files, so that only the difference between the two is sent through the network. In this case you don't need to worry about **"connection lost error"** because *Rsync can handle synchronizing between host and destination files*. 

     2. **Create snapshots of directories**

  Rsync is able to create snapshots of directories or file systems without requiring that all of the data be synchronized during every pass. 

     3. **Fast performance**

  Rsync uses compression to further reduce bandwidth, and it defaults to using SSH on most Linux systems for security. As a result, a simple Rsync command is much faster than SCP and performs more work than you might think.

     4.  **limit bandwidth consumption** 

  There are other goodies in Rsync, such as the ability to limit bandwidth consumption during transfers to reduce the impact on network connections, or the ability to use fuzzy matching to determine if a file has a twin or version with a different name or checksum on the target, and thus can be used as the basis of a rolling checksum transfer, and other elements that only serve to increase this utility's usefulness.


  ## Conclusion


  I was trying to share the problems I faced using SCP command to transfer files and also offer the solutions I found. I hope you found this post helpful.
---
