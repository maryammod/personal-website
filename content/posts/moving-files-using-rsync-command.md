---
title: Moving files using Rsync command
description: Rsync is a fast and extraordinarily Linux command using transferring files.
date: 2020-09-08T18:08:17.040Z
published: false
cover_image: false
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


  ## Basic Syntax


  The basic syntax for Rsync works as follow:


  ```

  rsync [optional modifiers] [SRC] [DEST]

  ```


  There are a couple of different ways you can use Linux rsync. In this example, **\[optional modifiers]** indicate the actions to be taken, **\[SRC]** is the source directory, and **\[DEST]** is the destination directory or machine.


  ### Basic Syntax for Remote Shell


  When using a remote shell, such as SSH or RSH, the rsync syntax will be slightly different.


  To access the remote shell (**PULL**) use the rsync command:


  ```

  rsync [optional modifiers] [USER@]HOST:SRC [DEST]

  ```


  To access the remote shell (**PUSH**) use the rsync command:


  ```

  rsync [optional modifiers] SRC [USER@]HOST:[DEST]

  ```




  ## Rsync options:


  Some of the commonly used options in rsync command are listed below:


  * \-v, –verbose Verbose output

  * \-q, –quiet suppress message output

  * \-a, –archive archive files and directory while synchronizing ( -a equal to following options -rlptgoD)

  * \-r, –recursive sync files and directories recursively

  * \-b, –backup take the backup during synchronization

  * \-u, –update don’t copy the files from source to destination if destination files are newer

  * \-l, –links copy symlinks as symlinks during the sync

  * \-n, –dry-run perform a trial run without synchronization

  * \-e, –rsh=COMMAND mention the remote shell to use in rsync

  * \-z, –compress compress file data during the transfer

  * \-h, –human-readable display the output numbers in a human-readable format

  * –progress show the sync progress during transfer


  Let’s jump into the useful examples of rsync command


  ## Rsync Example


  1. #### Copy files & directories recursively locally (rsync -zrvh or rsync -zavh)

     Let’s assume we have multiple files and directories inside pkumar user home directory, use below rsync command to copy files and directories recursively, either use -a or -r option to copy files and directories recursively.

     **Note** : In rsync command **\-a** option is used for archiving during the copy or sync and apart from archiving -a option is also used for followings:

     * recursively copy files and directory
     * copy symlinks as symlinks
     * preserve permissions
     * preserve group
     * preserve modification time
     * preserve ownership

     ```
     [root@gateway ~]# rsync -zrvh /home/pkumar /opt/backup
     or
     [root@gateway ~]# rsync -zavh /home/pkumar /opt/backup
     ```
  2. #### Copy or Sync files and directories from remote machine to local system

     Let’s suppose we want to copy files and directories from remote machine(192.168.1.29) to our local system, in the below example I am copying remote folder **“/opt/rpms_db**” in my local machine under **/tmp** folder

     ```
     [root@gateway ~]# rsync -zarvh root@192.168.1.29:/opt/rpms_db /tmp
     root@192.168.1.29's password:
     receiving incremental file list
     ……………………………………………………………
     rpms_db/
     rpms_db/httpd-2.4.6-88.el7.centos.x86_64.rpm
     rpms_db/httpd-tools-2.4.6-88.el7.centos.x86_64.rpm
     rpms_db/postfix-2.10.1-7.el7.x86_64.rpm
     rpms_db/pytalloc-2.1.13-1.el7.x86_64.rpm
     rpms_db/samba-4.8.3-4.el7.x86_64.rpm
     rpms_db/samba-client-libs-4.8.3-4.el7.x86_64.rpm
     rpms_db/samba-common-4.8.3-4.el7.noarch.rpm
     rpms_db/samba-common-libs-4.8.3-4.el7.x86_64.rpm
     rpms_db/samba-common-tools-4.8.3-4.el7.x86_64.rpm
     rpms_db/samba-libs-4.8.3-4.el7.x86_64.rpm

     sent 484 bytes  received 15.45M bytes  1.07M bytes/sec
     total size is 16.37M  speedup is 1.06
     [root@gateway ~]#
     ```

     Above command will automatically create a folder “rpms_db” under the /tmp folder in our local machine.



  Conclusion
---
