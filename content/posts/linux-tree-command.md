---
title: Linux tree command
description: Tree command? Machine Learning? Yes! you are asking the right
  question. There is no connection between Linux tree command and Machine
  Learning stuff. But when you need to prepare your data to feed your network
  you must know about Linux command to download or upload the data from or to
  Linux server. Let's get into it.
date: 2020-08-28T14:43:07.279Z
published: true
cover_image: /images/uploads/template.jpg
tags:
  - Machine Learning
  - Plant Classification
content: >-
  I know your job is implementing Machine Learning(ML) algorithms and you may
  think, learning Linux command is irrelevant but based on my experience you
  should know all ins-and-outs of an ML project, including understanding,
  organizing and preparing data before feeding the data into your ML network.
  So, I am writting several posts about Linux commands that can be so practical
  and helpful for data preparation as a part of doing an ML project.


  ## How to see the list of directories under Linux operating systems?


  You need to use a Linux command called "tree". It will list contents of directories in a tree-like format. It is a recursive directory listing program that produces a depth indented listing of files. When directory arguments are given, tree lists all the files and/or directories found in the given directories each in turn. tree returns the total number of files and/or directories listed. 


  ## How to install "tree" on a Linux?


  ```

  # yum install tree

  ```


  The syntax is:


  ```

  tree

  ```


  ```

  tree /path/to/directory

  ```


  ```

  tree [options]

  ```


  ```

  tree [options] /path/to/directory

  ```


  Here is a list of all options with a short description supported by the tree program:


  ```
    ------- Listing options -------
    -a            All files are listed.(except hidden files)   -d            List directories only.
    -l            Follow symbolic links like directories.
    -f            Print the full path prefix for each file.
    -l            Follow symbolic links like directories.
    -L level      Descend only level directories deep.
    -R            Rerun tree when max dir level reached.
    -P pattern    List only those files that match the pattern given.
    -I pattern    Do not list files that match the given pattern.
    --matchdirs   Include directory names in -P pattern matching.      --noreport    Turn off file/directory count at end of tree listing.
    --charset X   Use charset X for terminal/HTML and indentation line output.
    --filelimit # Do not descend dirs with more than # files in them.
    --timefmt <f> Print and format time according to the format <f>.
    -o filename   Output to file instead of stdout.
  ```


  ```
    -------- File options ---------
    -q            Print non-printable characters as '?'.
    -N            Print non-printable characters as is.
    -Q            Quote filenames with double quotes.
    -p            Print the protections for each file.
    -u            Displays file owner or UID number.
    -g            Displays file group owner or GID number.
    -s            Print the size in bytes of each file.
    -h            Print the size in a more human readable way.
    --si          Like -h, but use in SI units (powers of 1000).
    -D            Print the date of last modification or (-c) status change.
    -F            Appends '/', '=', '*', '@', '|' or '>' as per ls -F.
    --inodes      Print inode number of each file.
    --device      Print device ID number to which each file belongs.
  ```


  ```
    ------- Sorting options -------
    -v            Sort files alphanumerically by version.
    -t            Sort files by last modification time.
    -c            Sort files by last status change time.
    -U            Leave files unsorted.
    -r            Reverse the order of the sort.
    --dirsfirst   List directories before files (-U disables).
    --sort X      Select sort: name,version,size,mtime,ctime.
  ```


  The most intersting part of tree command for me is pattern option, "-P".

  Since I just need ".jpg" files to feed my network, I can use tree command with -p parameter to show me the right directories containing ".jpeg" files.


  ### Here is a simple example of using pattern option on a Linux tree command:


  ```

  $ sudo tree -f -P *.jpg

  ```


  So, you can find the directories contain images you want to download from them.


  I hope you find this post helpful as one of the beginning steps for the data preparation process.
---
