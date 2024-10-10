---
name: Super Resolution CNN for Sea Surface Temperature
tools: [CNN, Computer Vision, Tensorflow]
image: /assets/img/isro.jpg
description: High-resolution measurements of sea surface temperature (SST) are crucial to climate and ocean state forecasting. However, on cloudy days, satellites can only procure low-resolution SST measurements. I implemented a super-resolution Convolutional Neural Network to successfully downsample Sea Surface Temperature (SST) fields of the Bay of Bengal from a spatial resolution of 15 km to 1km.
---

# Super Resolution CNN for Oceanographic Data
##### Supervisor: <a href = "https://scholar.google.com/citations?user=NMTJ718AAAAJ&hl=en"> Dr. Neeraj Agarwal</a>

As the name quite evidently conveys, Sea Surface Temperature is the measurement of the temperature of the sea surface. Oh, by surface, I don't mean legit surface; in fact, it can extend to up to 10m beneath the actual <i>surface</i>!

And why do we need to measure the sea surface temperature?

Well, SST is a strong indicator of global climate change and stress to aquatic life. It also plays a pivotal role in weather and ocean state forecasting. Radiometers (thermal infrared or microwave) in space-borne satellites measure SST.

{% include elements/figure.html image="/assets/img/isro.jpg" caption="Photo by NASA on Unsplash" %}

<!-- ![preview](/assets/img/isro.jpg) -->


But these satellites aren't perfect. Though they perform great under clear skies, they cannot record high-resolution measurements on cloudy days.

And that's where the problem creeps in...

For all the great uses of SST that I just mentioned, there is a prerequisite-the data needs to be of high resolution. However, luckily, with satellites constantly monitoring sea surface temperature, there has been an upsurge in the amount of available SST Fields. And when there is a lot of data, we often think <i>deep learning.</i>

In this project, I assessed the efficiency of Convolutional Neural Networks to reconstruct high SR measurements from low SR. My study proved that CNNs could successfully increase the spatial resolution of sea surface temperature observations from 15 km to 1km.

{% include elements/figure.html image="/assets/img/isro2.jpeg" caption="Results" %}

<!-- ![preview](/assets/img/isro2.jpeg) -->

In an SST Field, each pixel gives the measurement of temperature at that location. So, it’s usually between a range of 20-40 degrees Celsius. Most of the state-of-the-art super-resolution networks have been trained on 255-bit image data. So, evaluating the same network for SST data (which has a lesser range), was one of the biggest challenges of this project.

<br>

### Technical Details
<ul>
<li>Language: Python</li>
<li>Library: <a href="https://www.unidata.ucar.edu/software/netcdf/"> NetCDF</a></li>
<li>API: Keras and Tensorflow</li>
<li>Model Architecture:
<ul><li>Layers : Convolutional Layers</li>
<li>Optimiser: Adam</li>
<li>Loss Function: Mean Squared Error</li>
<li> Activation Function: ReLu </li>
<li>Metric: Peak Signal to Noise Ratio </li> </ul> </li>
<li>Dataset Size:
<ul><li>Train: 1800 fields </li>
<li>Test: 600 fields </li> </ul></li>
</ul>

<p class="text-center">
{% include elements/button.html link="https://github.com/nikita-0209/downscale-sst" text="View Code" %}      
</p>
<p class="text-center">
{% include elements/button.html link="https://docs.google.com/presentation/d/169SzAYUFLvOWzhyE-tbJCy3iIlB6OBOVi9kdda-m290/present?slide=id.gcb9a0b074_1_140" text="View Presentation" %}      
</p>
<p class="text-center">
{% include elements/button.html link="https://drive.google.com/file/d/1IAE-T9W7qWpdHEKeVr-rZRE2RLLZ3Lm8/view?usp=sharing" text="View Report" %}
</p>
