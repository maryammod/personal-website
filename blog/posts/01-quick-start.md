---
title: Quick Start with NoncerPro
date: 2019-04-09 23:43:55
day: "09"
month: "Nov"
author: "Maryam"
description: "Quick Start with NoncerPro. Read how to start the miner in 2 minuets!"
image: "./images/noncer-pro-quick-start.jpg"
slug: quick-start
category: "Category"
---


Download the miner depending on your OS (windows or Linux), edit the bash or bat file in a text editor to replace the default Nimiq address with yours, save and run the bash or bat file.

**Sample contents of the bash file for Linux:**

```
!/bin/bash
./noncerpro --address='NQ52 7TL5 RA6B SSAS FULC P3SR D88B X2CK 0VTX' --threads=2
```

**Sample contents of the bat file for Windows:**
```
SET UV_THREADPOOL_SIZE=32
noncerpro.exe --address="NQ52 7TL5 RA6B SSAS FULC P3SR D88B X2CK 0VTX" --threads=2
pause
```

For more options and settings see the reository readme file for [CUDA](https://github.com/NoncerPro/noncerpro-nimiq-cuda) and [OpenCL](https://github.com/NoncerPro/noncerpro-nimiq-opencl).

You are more than welcome to join our Discord:[](https://discord.gg/DWDnJBy)