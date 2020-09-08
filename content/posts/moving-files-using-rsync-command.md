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




  Rsync basic syntax


  Rsync options


  Rsync Example


  Conclusion
---
