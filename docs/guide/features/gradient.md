---
footer: false
---

# Gradient

Create background linear gradient colors with flexible control over the **Color**, **Space**, and **Angles**.

## Generator Usage

> Learn more about the [Background Gradient API](/api/backgrounds/background-gradient).

```html
<div class="
  bg-gradient
  start-tint-amber-1 start-10
  stop-tint-indigo-1 stop-90 
  angle-45 ... 
  height-24 
  width-24
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .bg-gradient,
    .start-tint-amber-1,
    .stop-tint-indigo-1,
    .start-10,
    .stop-90,
    .angle-45,
    .height-24,
    .width-24;
}
```
:::

## Gradient Presets Overview

Create background linear gradient with over **150+** color presets to choose from.

<div class="flex flex-gap-2 flex-wrap justify-between items-center (expand)margin-b-6 (expand)height-16 (expand)width-16 (expand)curve-border-full (expand)shadow">
  <div class="flex flex-center bg-gradient-preset-1">
    <div class="-margin-b-24 text-sm">1</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-2">
    <div class="-margin-b-24 text-sm">2</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-3">
    <div class="-margin-b-24 text-sm">3</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-4">
    <div class="-margin-b-24 text-sm">4</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-5">
    <div class="-margin-b-24 text-sm">5</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-6">
    <div class="-margin-b-24 text-sm">6</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-7">
    <div class="-margin-b-24 text-sm">7</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-8">
    <div class="-margin-b-24 text-sm">8</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-9">
    <div class="-margin-b-24 text-sm">9</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-10">
    <div class="-margin-b-24 text-sm">10</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-11">
    <div class="-margin-b-24 text-sm">11</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-12">
    <div class="-margin-b-24 text-sm">12</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-13">
    <div class="-margin-b-24 text-sm">13</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-14">
    <div class="-margin-b-24 text-sm">14</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-15">
    <div class="-margin-b-24 text-sm">15</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-16">
    <div class="-margin-b-24 text-sm">16</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-17">
    <div class="-margin-b-24 text-sm">17</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-18">
    <div class="-margin-b-24 text-sm">18</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-19">
    <div class="-margin-b-24 text-sm">19</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-20">
    <div class="-margin-b-24 text-sm">20</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-21">
    <div class="-margin-b-24 text-sm">21</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-22">
    <div class="-margin-b-24 text-sm">22</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-23">
    <div class="-margin-b-24 text-sm">23</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-24">
    <div class="-margin-b-24 text-sm">24</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-25">
    <div class="-margin-b-24 text-sm">25</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-26">
    <div class="-margin-b-24 text-sm">26</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-27">
    <div class="-margin-b-24 text-sm">27</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-28">
    <div class="-margin-b-24 text-sm">28</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-29">
    <div class="-margin-b-24 text-sm">29</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-30">
    <div class="-margin-b-24 text-sm">30</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-31">
    <div class="-margin-b-24 text-sm">31</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-32">
    <div class="-margin-b-24 text-sm">32</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-33">
    <div class="-margin-b-24 text-sm">33</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-34">
    <div class="-margin-b-24 text-sm">34</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-35">
    <div class="-margin-b-24 text-sm">35</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-36">
    <div class="-margin-b-24 text-sm">36</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-37">
    <div class="-margin-b-24 text-sm">37</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-38">
    <div class="-margin-b-24 text-sm">38</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-39">
    <div class="-margin-b-24 text-sm">39</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-40">
    <div class="-margin-b-24 text-sm">40</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-41">
    <div class="-margin-b-24 text-sm">41</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-42">
    <div class="-margin-b-24 text-sm">42</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-43">
    <div class="-margin-b-24 text-sm">43</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-44">
    <div class="-margin-b-24 text-sm">44</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-45">
    <div class="-margin-b-24 text-sm">45</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-46">
    <div class="-margin-b-24 text-sm">46</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-47">
    <div class="-margin-b-24 text-sm">47</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-48">
    <div class="-margin-b-24 text-sm">48</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-49">
    <div class="-margin-b-24 text-sm">49</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-50">
    <div class="-margin-b-24 text-sm">50</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-51">
    <div class="-margin-b-24 text-sm">51</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-52">
    <div class="-margin-b-24 text-sm">52</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-53">
    <div class="-margin-b-24 text-sm">53</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-54">
    <div class="-margin-b-24 text-sm">54</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-55">
    <div class="-margin-b-24 text-sm">55</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-56">
    <div class="-margin-b-24 text-sm">56</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-56">
    <div class="-margin-b-24 text-sm">56</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-57">
    <div class="-margin-b-24 text-sm">57</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-58">
    <div class="-margin-b-24 text-sm">58</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-59">
    <div class="-margin-b-24 text-sm">59</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-60">
    <div class="-margin-b-24 text-sm">60</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-61">
    <div class="-margin-b-24 text-sm">61</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-62">
    <div class="-margin-b-24 text-sm">62</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-63">
    <div class="-margin-b-24 text-sm">63</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-64">
    <div class="-margin-b-24 text-sm">64</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-65">
    <div class="-margin-b-24 text-sm">65</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-66">
    <div class="-margin-b-24 text-sm">66</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-67">
    <div class="-margin-b-24 text-sm">67</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-68">
    <div class="-margin-b-24 text-sm">68</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-69">
    <div class="-margin-b-24 text-sm">69</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-70">
    <div class="-margin-b-24 text-sm">70</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-71">
    <div class="-margin-b-24 text-sm">71</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-72">
    <div class="-margin-b-24 text-sm">72</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-73">
    <div class="-margin-b-24 text-sm">73</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-74">
    <div class="-margin-b-24 text-sm">74</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-75">
    <div class="-margin-b-24 text-sm">75</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-76">
    <div class="-margin-b-24 text-sm">76</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-77">
    <div class="-margin-b-24 text-sm">77</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-78">
    <div class="-margin-b-24 text-sm">78</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-79">
    <div class="-margin-b-24 text-sm">79</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-80">
    <div class="-margin-b-24 text-sm">80</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-81">
    <div class="-margin-b-24 text-sm">81</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-82">
    <div class="-margin-b-24 text-sm">82</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-83">
    <div class="-margin-b-24 text-sm">83</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-84">
    <div class="-margin-b-24 text-sm">84</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-85">
    <div class="-margin-b-24 text-sm">85</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-86">
    <div class="-margin-b-24 text-sm">86</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-87">
    <div class="-margin-b-24 text-sm">87</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-88">
    <div class="-margin-b-24 text-sm">88</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-89">
    <div class="-margin-b-24 text-sm">89</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-90">
    <div class="-margin-b-24 text-sm">90</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-91">
    <div class="-margin-b-24 text-sm">91</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-92">
    <div class="-margin-b-24 text-sm">92</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-92">
    <div class="-margin-b-24 text-sm">92</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-93">
    <div class="-margin-b-24 text-sm">93</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-94">
    <div class="-margin-b-24 text-sm">94</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-95">
    <div class="-margin-b-24 text-sm">95</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-96">
    <div class="-margin-b-24 text-sm">96</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-97">
    <div class="-margin-b-24 text-sm">97</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-98">
    <div class="-margin-b-24 text-sm">98</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-99">
    <div class="-margin-b-24 text-sm">99</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-100">
    <div class="-margin-b-24 text-sm">100</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-101">
    <div class="-margin-b-24 text-sm">101</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-102">
    <div class="-margin-b-24 text-sm">102</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-103">
    <div class="-margin-b-24 text-sm">103</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-104">
    <div class="-margin-b-24 text-sm">104</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-105">
    <div class="-margin-b-24 text-sm">105</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-106">
    <div class="-margin-b-24 text-sm">106</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-107">
    <div class="-margin-b-24 text-sm">107</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-108">
    <div class="-margin-b-24 text-sm">108</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-109">
    <div class="-margin-b-24 text-sm">109</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-110">
    <div class="-margin-b-24 text-sm">110</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-111">
    <div class="-margin-b-24 text-sm">111</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-112">
    <div class="-margin-b-24 text-sm">112</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-113">
    <div class="-margin-b-24 text-sm">113</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-114">
    <div class="-margin-b-24 text-sm">114</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-115">
    <div class="-margin-b-24 text-sm">115</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-116">
    <div class="-margin-b-24 text-sm">116</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-117">
    <div class="-margin-b-24 text-sm">117</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-118">
    <div class="-margin-b-24 text-sm">118</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-119">
    <div class="-margin-b-24 text-sm">119</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-120">
    <div class="-margin-b-24 text-sm">120</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-121">
    <div class="-margin-b-24 text-sm">121</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-122">
    <div class="-margin-b-24 text-sm">122</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-123">
    <div class="-margin-b-24 text-sm">123</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-124">
    <div class="-margin-b-24 text-sm">124</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-125">
    <div class="-margin-b-24 text-sm">125</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-126">
    <div class="-margin-b-24 text-sm">126</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-127">
    <div class="-margin-b-24 text-sm">127</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-128">
    <div class="-margin-b-24 text-sm">128</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-129">
    <div class="-margin-b-24 text-sm">129</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-130">
    <div class="-margin-b-24 text-sm">130</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-131">
    <div class="-margin-b-24 text-sm">131</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-132">
    <div class="-margin-b-24 text-sm">132</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-133">
    <div class="-margin-b-24 text-sm">133</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-134">
    <div class="-margin-b-24 text-sm">134</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-135">
    <div class="-margin-b-24 text-sm">135</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-136">
    <div class="-margin-b-24 text-sm">136</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-137">
    <div class="-margin-b-24 text-sm">137</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-138">
    <div class="-margin-b-24 text-sm">138</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-139">
    <div class="-margin-b-24 text-sm">139</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-140">
    <div class="-margin-b-24 text-sm">140</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-141">
    <div class="-margin-b-24 text-sm">141</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-142">
    <div class="-margin-b-24 text-sm">142</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-143">
    <div class="-margin-b-24 text-sm">143</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-144">
    <div class="-margin-b-24 text-sm">144</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-145">
    <div class="-margin-b-24 text-sm">145</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-146">
    <div class="-margin-b-24 text-sm">146</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-147">
    <div class="-margin-b-24 text-sm">147</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-148">
    <div class="-margin-b-24 text-sm">148</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-149">
    <div class="-margin-b-24 text-sm">149</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-150">
    <div class="-margin-b-24 text-sm">150</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-151">
    <div class="-margin-b-24 text-sm">151</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-152">
    <div class="-margin-b-24 text-sm">152</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-153">
    <div class="-margin-b-24 text-sm">153</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-154">
    <div class="-margin-b-24 text-sm">154</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-155">
    <div class="-margin-b-24 text-sm">155</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-156">
    <div class="-margin-b-24 text-sm">156</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-156">
    <div class="-margin-b-24 text-sm">156</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-157">
    <div class="-margin-b-24 text-sm">157</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-158">
    <div class="-margin-b-24 text-sm">158</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-159">
    <div class="-margin-b-24 text-sm">159</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-160">
    <div class="-margin-b-24 text-sm">160</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-161">
    <div class="-margin-b-24 text-sm">161</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-162">
    <div class="-margin-b-24 text-sm">162</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-163">
    <div class="-margin-b-24 text-sm">163</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-164">
    <div class="-margin-b-24 text-sm">164</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-165">
    <div class="-margin-b-24 text-sm">165</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-166">
    <div class="-margin-b-24 text-sm">166</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-167">
    <div class="-margin-b-24 text-sm">167</div>
  </div>
  <div class="flex flex-center bg-gradient-preset-168">
    <div class="-margin-b-24 text-sm">168</div>
  </div>
  
</div>

## Gradient Presets Usage

> Learn more about the [Background Gradient Presets API](/api/backgrounds/background-gradient).

```html
<div class="
  bg-gradient-preset-1 ...
  height-24 
  width-24
">
  ...
</div>
```

:::details SCSS
```scss
.dummy {
  @extend
    .bg-gradient-preset-1,
    .height-24,
    .width-24;
}
```
:::


