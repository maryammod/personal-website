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


  ## Basic Rsync Syntax


  The basic syntax for Rsync works simply as follow:


  ```

  rsync [optional modifiers] [SRC] [DEST]

  ```


  * **\[optional modifiers]** indicate the actions to be taken

  *  **\[SRC]** is the source directory

  *  **\[DEST]** is the destination directory




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


  ## Rsync Example


  1. #### Copy files & directories recursively locally 


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

  [root@gateway ~]# rsync -zrvh /home/singles .

  or

  [root@gateway ~]# rsync -zavh /home/singles .

  ```

  Let's look at the options:


  * **\-z**, –compress file data during the transfer

  * **\-v**, –Verbose output

  * **\-h**, –display the output numbers


  1. #### Copy or Sync files and directories from remote machine to local system

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

     #### Example:7) Display Synchronization progress in rsync command output

     If you want to see the sync or copy progress in rsync command then use “**–progress**“, example is shown below

     ```
     [root@gateway ~]# rsync -avh --progress root@192.168.1.29:/opt/rpms_db /tmp
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
     rpms_db/samba-4.8.3-4.el7.x86_64.rpm
             696.47K 100%    3.71MB/s    0:00:00 (xfr#19, to-chk=5/25)
     rpms_db/samba-client-libs-4.8.3-4.el7.x86_64.rpm
               5.07M 100%   19.90MB/s    0:00:00 (xfr#20, to-chk=4/25)
     rpms_db/samba-common-4.8.3-4.el7.noarch.rpm
             210.98K 100%  844.42kB/s    0:00:00 (xfr#21, to-chk=3/25)
     rpms_db/samba-common-libs-4.8.3-4.el7.x86_64.rpm
             167.51K 100%  667.70kB/s    0:00:00 (xfr#22, to-chk=2/25)
     rpms_db/samba-common-tools-4.8.3-4.el7.x86_64.rpm
             458.38K 100%    1.77MB/s    0:00:00 (xfr#23, to-chk=1/25)
     rpms_db/samba-libs-4.8.3-4.el7.x86_64.rpm
             282.33K 100%    1.09MB/s    0:00:00 (xfr#24, to-chk=0/25)

     sent 484 bytes  received 16.38M bytes  3.64M bytes/sec
     total size is 16.37M  speedup is 1.00
     [root@gateway ~]#
     ```
  2. #### Example:9) Resume large file transfer after getting failed in scp

     There are some scenarios in linux admin profile where we have started copying a larger file using scp command, but it got terminated in the middle and we can’t afford to start copying it again using scp because of its large size and time consumption.

     So in this situation rsync command can used as it can start copying the file from where it left off or terminated, or in other words rsync can transfer the files which are partially copied using scp command. Example is shown below,

     ```

     ```

     \
     Example:11) Put limit on file transfer size (–max-size)

     If you don’t want to transfer or copy the large files using rsync then use the option ‘–**max-size={specify-size-here}’**, let’s assume we don’t we don’t want to transfer the files whose size is more than 500K,

     Note: To specify the size in MB use M and for GB use G.

     ```
     [root@app ~]# rsync -avz --max-size='500K' /opt/rpms_db root@192.168.1.28:/tmp
     ```

     #### Example:17) View the difference in files & directories between source and destination

     Use “**\-i**” option in rsync command to list the difference in files and directories between source and destination. Example is shown below

     ```
     [root@gateway ~]# rsync -avzi /home/pkumar/techi root@192.168.1.29:/opt
     root@192.168.1.29's password:
     sending incremental file list
     .d..t...... techi/
     <f.st...... techi/projects.txt

     sent 438 bytes  received 45 bytes  138.00 bytes/sec
     total size is 11,648,064  speedup is 24,116.07
     [root@gateway ~]#
     ```

     As per above command output, there is difference in file called “projects.txt” on destination. Following are the meaning of the keywords in above output,



     * d: indicates change in destination file
     * f: indicates a file
     * t: indicates change in timestamps
     * s: indicates change in size

     That’s all from this tutorial, in case these examples you to understand rsync command more efficiently then please do share your feedback and comments

     #### Example:13) Remove files from source after synchronization (–remove-source-files)

     Let’s suppose you want to delete files from source once the synchronization is completed using rsync command. In the below example, folder from local system “**/home/pkumar/techi.tgz**” is synced to remote system (192.168.1.29), once the synchronization is completed, it will delete the file from source.

     ```
     [root@gateway ~]# rsync --remove-source-files -zvh /home/pkumar/techi.tgz root@192.168.1.29:/opt
     root@192.168.1.29's password:
     techi.tgz
     sent 597 bytes  received 43 bytes  182.86 bytes/sec
     total size is 518  speedup is 0.81
     [root@gateway ~]#
     [root@gateway ~]# ls -l /home/pkumar/techi.tgz
     ls: cannot access /home/pkumar/techi.tgz: No such file or directory
     [root@gateway ~]#
     ```



  Conclusion
---
