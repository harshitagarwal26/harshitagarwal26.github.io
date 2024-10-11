---
name: Fraud Detection in E-commerce using Machine Learning
tools: [CNN, Computer Vision, Tensorflow]
image: /assets/img/fraud.png
description: E-commerce businesses are increasingly facing growing risks from various fraudulent activities. These issues not only escalate operational costs but also threaten consumer trust, making it essential for businesses to implement robust fraud prevention measures. As fraudsters become more sophisticated, the impact on e-commerce operations continues to intensify. Developed a Machine Learning model utilizing the Extra Trees Classifier to identify fraudulent activities on e-commerce platforms, enabling timely intervention against fraudulent users.
---

# Super Resolution CNN for Oceanographic Data
##### Supervisor: <a href = "https://scholar.google.com/citations?user=NMTJ718AAAAJ&hl=en"> Dr. Neeraj Agarwal</a>

As the name quite evidently conveys, Sea Surface Temperature is the measurement of the temperature of the sea surface. Oh, by surface, I don't mean legit surface; in fact, it can extend to up to 10m beneath the actual <i>surface</i>!

And why do we need to measure the sea surface temperature?

Well, SST is a strong indicator of global climate change and stress to aquatic life. It also plays a pivotal role in weather and ocean state forecasting. Radiometers (thermal infrared or microwave) in space-borne satellites measure SST.

E-commerce businesses face a range of fraudulent activities that can severely impact their operations. One common issue is *return-to-origin* fraud, where customers exploit return policies by falsely claiming returns or returning damaged goods for a refund. *Chargeback fraud* occurs when a buyer disputes a legitimate transaction, often claiming they never received the item, leading to a refund while they keep the product. *Account takeover* is another major concern, where hackers gain access to customer accounts to make unauthorized purchases. Lastly, *promo code* abuse involves the misuse of promotional discounts, either by reusing codes beyond their intended use or sharing them widely, resulting in financial loss for the business. These types of fraud pose significant challenges, increasing operational costs and impacting consumer trust.


{% include elements/figure.html image="/assets/img/fraud.png" caption="Photo by NASA on Unsplash" %}

<!-- ![preview](/assets/img/fraud.png) -->


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
{% include elements/button.html link="https://docs.google.com/presentation/d/1WjXS26SAQyXHL7AQ-4fc_d-1GfkESrU3nvx0Hhfvydg/present?slide=id.g30a7c5500cf_2_71" text="View Presentation" %}      
</p>
<p class="text-center">
{% include elements/button.html link="https://drive.google.com/file/d/1IAE-T9W7qWpdHEKeVr-rZRE2RLLZ3Lm8/view?usp=sharing" text="View Report" %}
</p>
