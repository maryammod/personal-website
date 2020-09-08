---
title: Files transfer using scp problems & a good alternative rsync commands -
  Maryam Bafandkar
description: We are transffering a huge number of files from a remoteLinux
  machine to our local Linux system.
date: 2020-09-08T15:23:03.089Z
published: false
cover_image: false
tags:
  - Linux
content: >-
  We are transffering a huge number of files from a remoteLinux machine to our
  local Linux system.


  So far, based on the previous posts, I used SCP Linux command but I faced a wide range of difficulties, I'll explain it in detail on this article. I found another useful Linux command for transferring files help us to move the files easier and much faster, ' **rsync**' Linux command.


  Let's review some problem of using SCP and learning more about using the "rsync" command and its advantages.


  ## SCP Problem


  Using SCP to transfer files in a Linux host and they fail. There are errors in the filetransfer_log similar to:


  *  lost connection

  * connection refused

  *  transfer to primary and secondary host failed or there is only primary and transfer to it failed


  In most cases when you want to move a few files you barely see that errors but for several SCP commands and moving a huge number of files, it is pretty common to face that errors.


  That errors stop file transferring and when you want to fix it, you need to run it from scratch to make sure all files will be transferred which it is not efficient. you can use watch command, though.


  **Watch command** tells you how many files are in a specific folder to make sure how many files are already transferred. (you can take a look at **watch** Linux command post)


  ## Cause


  The remote host is configured to receive a maximum amount of connections that SSH can handle. This limit is too low for the number of appliances that are concurrently sending data.




  ## Solution 


  I read some articles to handel the SCP file transferring erorrs, I breifly explain the solutions:


  *  increasing the MaxStartups parameter on the remote host 

  *  try SCP in verbose mode



  I personally decided to change the SCP command to RSYNC one.
---
