---
title: Moving files using Rsync command
description: Rsync is a fast and extraordinarily Linux command using transferring files.
date: 2020-09-08T18:08:17.040Z
published: true
cover_image: /images/uploads/rsync-maryam-bafandkar.jpg
tags:
  - Linux
content: >-
  Rsync (Remote Sync) is a most commonly used command for copying and
  synchronizing files and directories remotely as well as locally in Linux
  systems. It efficiently copies and sync files to or from a remote system.


  It’s faster than [SCP](https://maryambafandkar.me/files-transfer-using-scp-problems-and-rsync-commands) (Secure Copy) because Rsync uses the remote-update protocol, take a snapshot and enable to compress files before transferring. At the first step, it copies the whole content of a file or a directory from source to destination and then, it copies only the changed blocks and bytes to the destination.


  ## Some of the *interesting features* of Rsync are:


  * Supports all permissions of links, devices, owners and groups.

  * Uses any transparent remote shell, including SSH or RSH

  * Does not require super-user privileges.

  * pipelining of file transfers to minimize latency costs.

  * support for anonymous or authenticated Rsync daemons (ideal for mirroring)


  ## Install Rsync


  Rsync installed with many Linux distributions but to check whether Rsync is installed on your machine or not, execute the following command:


  ```

  rsync -version

  ```


  If you can see the version of Rsync on your Linux machine (Ubuntu), it means Rsync is already installed.


  Otherwise, you need to install it manually in just a minute by using this simple following command:


  ```

  apt-get install rsync

  ```


  ## Basic Rsync Syntax


  The basic syntax for Rsync works simply as follow:


  ```

  rsync [optional modifiers] [SRC] [DEST]

  ```


  * **\[optional modifiers]** indicate the actions to be taken

  * **\[SRC]** is the source directory

  * **\[DEST]** is the destination directory


  ### Basic Syntax for Remote Shell


  The Rsync syntax for using a remote shell will be slightly different.


  ```

  rsync [optional modifiers] [USER@]HOST:SRC[DEST] [DEST]

  ```


  ## Rsync options:


  Some of the commonly important used options in rsync command are listed below:


  * **\-v**, –Verbose output

  * **\-q**, –quiet suppress message output

  * **\-a**, –archive files and directory while synchronizing

  * **\-r**, –recursive sync files and directories recursively

  * **\-b**, –backup take the backup during synchronization

  * **\-u**, –update don’t copy the files from source to destination if destination files are newer

  * **\-l**, –links copy symlinks as symlinks during the sync

  * **\-n**, –dry-run perform a trial run without synchronization

  * **\-e**, –rsh=COMMAND mention the remote shell to use in rsync

  * **\-z**, –compress file data during the transfer

  * **\-h**, –human-readable display the output numbers in a human-readable format

  * **–progress**, -show the sync progress during transferring


  To read more about Rsync options, take a look at https://linux.die.net/man/1/rsync


  Let’s jump into the useful and amazing examples of Rsync command.


  ## Rsync Examples




  #### 1. Copy files & directories recursively


  Sometimes you need to transfer all files and directories of one directory, the option of -r is the best Rsync options for you, we call it, "recursively".

  **either use -a or -r option to copy files and directories recursively.**

  In rsync command **\-a** option is used for archiving during the copy or sync and apart from archiving -a option is also used for followings:


  * recursively copy files and directory

  * copy symlinks as symlinks

  * preserve permissions

  * preserve group

  * preserve modification time

  * preserve ownership


  Assume we need to copy all files in "singles" directory at Digits remote Linux computer to the current folder at the destination.


  ```

  [root@gateway ~]# rsync -zrvh maryam@digits.uwinnipeg.ca:/home/singles .

  or

  [root@gateway ~]# rsync -zavh maryam@digits.uwinnipeg.ca:/home/singles .

  ```


  Let's look at the options:


  * **\-z**, –compress file data during the transfer

  * **\-v**, –Verbose output

  * **\-h**, –display the output numbers


  #### 2. Display Synchronization progress in Rsync command output


  If you want to see the sync or copy progress in rsync command then use “**–progress**“


  ```

  [root@gateway ~]# rsync -avh --progress maryam@digits.uwinnipeg.ca:/home/singles /tmp

  root@192.168.1.29's password:

  receiving incremental file list

  ……………………………………………………………………………………………………..

  rpms_db/

  rpms_db/httpd-2.4.6-88.el7.centos.x86_64.rpm
            2.84M 100%   35.22MB/s    0:00:00 (xfr#6, to-chk=18/25)
  rpms_db/httpd-tools-2.4.6-88.el7.centos.x86_64.rpm
           92.50K 100%    1.13MB/s    0:00:00 (xfr#7, to-chk=17/25)
  rpms_db/postfix-2.10.1-7.el7.x86_64.rpm
            2.56M 100%   14.44MB/s    0:00:00 (xfr#17, to-chk=7/25)

  sent 484 bytes  received 16.38M bytes  3.64M bytes/sec

  total size is 16.37M  speedup is 1.00

  [maryam@digits ~]#

  ```


  #### 3. Resume large file transfer after getting failed in SCP


  There are some scenarios in Linux admin profile where we have started copying a larger file using scp command, but it got terminated in the middle and we can’t afford to start copying it again using scp because of its large size and time consumption.


  So in this situation rsync command can used as it can start copying the file from where it left off or terminated, or 
     *Note: After a failur experience of using SCP, Rsync can continue the coping accurately and even faster.*
  in other words rsync can synchronized the files and transfer the files which are partially copied using scp command


  ```

  [maryam@digits ~]# scp maryam@digits.uwinnipeg.ca:/root/singles /plant_images

  .

  Canola2021.jpg   100% 97MB 00:00

  Canola2020.jpg   100% 67MB 00:00

  $ connection reset by 192.168.1.29 port 22

  ```


  ***connection reset* is a funny error made me finding the *rsync* command to transfer the files which are partially copied using SCP command.**


  ```

  [root@gateway ~]# rsync -P --rsh=ssh maryam@digits.uwinnipeg.ca:/root/singles /plant_images


  Canola2021.jpg   100% 97MB 00:00

  Canola2020.jpg   100% 67MB 00:00

  Canola20211.jpg  100% 70MB 00:00

  Canola20201.jpg  100% 60MB 00:00
    1,921,843,200 100%   18.47MB/s    0:01:39 (xfr#1, to-chk=0/1)
  [root@gateway ~]#

  ```


  Here you go, you can simply transfer your files and make sure all directories are synced and the transferring job is already done quite well.


  ### 4. Put a limit on file transfer size (–max-size)


  If you don’t want to transfer or copy the large files (for example, you don't want to transfer files more than 2MB), then use the option ‘–**max-size={specify-size-here}’.** In our example we should write ‘–max-size=2M’.

     **Note: To specify the size in MB use M and for GB use G.**

  ```

  [root@gateway ~]# rsync -P --max-size='2M' maryam@digits.uwinnipeg.ca:/root/singles /plant_images

  ```


  ## Conclusion


  In this post, I was trying to explain Rsync Linux command simply and practically. It was short but completely practical if you have to transfer a huge number of images from a remote Linux system, like me, and face some unexpected errors like "connection reset" or some errors like it. I hope you found it useful additionally, I hope this post can make you happy when you can move many files in a short time without any error or interruptions.
---
