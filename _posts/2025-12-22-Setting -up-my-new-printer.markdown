---
layout: post
title: "Setting Up a Canon Printer on Linux"
date: 2025-12-22 20:00:00 +0530
categories: [general]
---

I finally got my new printer. The **Canon Pixma MG2570S**. Setting it up was a bit of a hassle, but it was fun going through the guide.

![Unboxing the printer]({{ site.baseurl }}/assets/images/printer1.jpeg)

## Linux Driver Installation

After so many days of not setting up any hardware, I was pleased to find that there's Linux support! The MG2500 series is supported, and the driver is available in the default repositories.

I downloaded the driver from [Canon's official support page](https://asia.canon/en/support/0100550201) and installed the **MG2500 series IJ Printer Driver Ver 4.00 for Linux** (Debian Package archive). There's an `install.sh` script inside. I ran it as root, and the printer was detected by CUPS.

![Driver installation]({{ site.baseurl }}/assets/images/printer3.png)

## The Final Setup

And it certainly fits my table nicely!

![Printer on my desk]({{ site.baseurl }}/assets/images/printer2.jpeg)

Hope it works well for years to come.
