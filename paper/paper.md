### Abstract

The Morphing Infinity Spiral (MIS) combines scaling, rotation, and time-dependent transformations to produce patterns that exhibit partial self-similarity and evolving fractal structures. This study examines the breakdown of scale invariance over time, the effects of complex parameters on dynamic behavior, and the emergence of fractal-like features. Computational methods are used to evaluate rotational symmetry, fractal dimensions, and the interplay between scale and time. The results provide insights into dynamic systems with evolving symmetry properties and suggest applications in modeling complex phenomena across mathematics and physics.



To build the **Morphing Infinity Spiral (MIS)** from scratch, we need to understand its components, step by step, by breaking the equation into fundamental mathematical and geometric concepts.

---

### **Step 1: Starting Point**
At its heart, the **MIS** combines ideas from:
1. **Scaling**: Transforming a shape by stretching or compressing it.
2. **Complex Exponentiation**: Representing scaling and rotation using complex numbers.
3. **Logarithmic Growth**: Controlling how transformations scale nonlinearly.
4. **Time Evolution**: Adding dynamics to the system, making it morph.

---

### **Step 2: Base Concept - Complex Scaling**
We start with a simple power-law function:
\[
f(z) = z^\alpha, \quad z \in \mathbb{C}, \, \alpha \in \mathbb{C}.
\]
This function:
- **Scales** \(z\) by \(|z|^\text{Re}(\alpha)\), stretching or compressing the magnitude.
- **Rotates** \(z\) by \(\text{Im}(\alpha) \cdot \arg(z)\), where \(\arg(z)\) is the angle of \(z\) in polar form.

#### Key Property:
For any scale factor \(k > 0\),
\[
f(kz) = k^\alpha \cdot f(z).
\]
This is **scale invariance**: the shape remains similar after scaling.

---

### **Step 3: Adding Complexity - Logarithms in the Complex Plane**
To introduce nonlinearity, we use the **complex logarithm**:
\[
\log(z) = \ln|z| + i\arg(z).
\]
The logarithm:
1. Separates the **magnitude** (\(\ln|z|\)) and **phase** (\(\arg(z)\)) of \(z\).
2. Grows nonlinearly, introducing interesting behaviors for large or small \(|z|\).

---

### **Step 4: Morphing with Time - Exponentiation with Time Parameter**
We make the function dynamic by adding a **time-dependent rotation**:
\[
g(z, t) = \exp(i \cdot t \cdot (\log(z))^\beta), \quad \beta \in \mathbb{C}.
\]
This term creates:
- **Rotation** controlled by \(t\), with \((\log(z))^\beta\) determining how rotation changes with \(|z|\) and \(\arg(z)\).
- **Time Evolution**: As \(t\) changes, the spiral pattern morphs.

---

### **Step 5: Combining Scaling and Morphing**
Finally, we combine the scaling and morphing terms:
\[
S_{\alpha, \beta}(z, t) = z^\alpha \cdot \exp(i \cdot t \cdot (\log(z))^\beta).
\]
This equation balances:
1. **Scale Invariance** (\(z^\alpha\)): Preserves structure when \(t = 0\).
2. **Time Evolution** (\(\exp(i \cdot t \cdot (\log(z))^\beta)\)): Introduces dynamic morphing.

---

### **Step 6: Emergent Behavior**
The MIS exhibits several fascinating properties:
1. **Fractals and Self-Similarity**: Repeated application of \(S_{\alpha, \beta}\) creates patterns with partial self-similarity.
2. **Scale-Time Interplay**: As \(t\) increases, the perfect scale invariance of \(z^\alpha\) is disrupted by the time-dependent rotation.
3. **Complex Dynamics**: The interaction of \(\alpha\), \(\beta\), and \(t\) creates intricate spirals and patterns.

---

### Building Intuition with an Example
Let’s compute \(S_{\alpha, \beta}(z, t)\) for specific values:
- \(z = 1 + i\): A complex number in the first quadrant.
- \(\alpha = 0.5 + 0.5i\): Balances scaling and rotation.
- \(\beta = 1\): Linear effect of \(\log(z)\).
- \(t = 0\): No time evolution.

At \(t = 0\):
\[
S_{\alpha, \beta}(z, 0) = z^\alpha.
\]

For \(t > 0\):
\[
S_{\alpha, \beta}(z, t) = z^\alpha \cdot \exp(i \cdot t \cdot \log(z)).
\]
The time evolution introduces rotation at a rate proportional to \(\log(z)\).




# Step 1: Complex Scaling
The first component of the MIS is scaling a complex number 𝑧 by a complex exponent 𝛼. This operation combines magnitude scaling and phase rotation.


SAMPLE:

Complex scaling result for z=(1+1j), alpha=(0.5+0.5j): (0.6777725052404346+0.4306022701168375j)

### **Understanding the Complex Scaling Result**

The result of the **complex scaling** operation for \( z = 1 + i \) and \( \alpha = 0.5 + 0.5i \) is:
\[
z^\alpha = 0.6778 + 0.4306i
\]

To explain this result mathematically, let’s break it down step by step:

---

### **Mathematical Breakdown**

#### 1. Polar Representation of \(z\)
A complex number \( z = x + yi \) can be expressed in polar form as:
\[
z = r \cdot e^{i\theta}, \quad r = |z| = \sqrt{x^2 + y^2}, \, \theta = \arg(z) = \tan^{-1}\left(\frac{y}{x}\right)
\]

For \( z = 1 + i \):
\[
r = \sqrt{1^2 + 1^2} = \sqrt{2}, \quad \theta = \tan^{-1}(1) = \frac{\pi}{4}
\]

#### 2. Applying the Complex Exponent
The operation \( z^\alpha \) involves:
\[
z^\alpha = (r \cdot e^{i\theta})^\alpha = r^{\text{Re}(\alpha)} \cdot e^{-\text{Im}(\alpha)\theta} \cdot e^{i(\text{Re}(\alpha)\theta + \text{Im}(\alpha)\ln(r))}
\]

Substitute \( r = \sqrt{2} \), \( \theta = \frac{\pi}{4} \), and \( \alpha = 0.5 + 0.5i \):
1. **Magnitude Scaling**:
   \[
   r^{\text{Re}(\alpha)} = (\sqrt{2})^{0.5} = 2^{0.25} \approx 1.1892
   \]
2. **Phase Modification**:
   - Phase rotation from real part:
     \[
     \text{Re}(\alpha) \cdot \theta = 0.5 \cdot \frac{\pi}{4} = \frac{\pi}{8}
     \]
   - Additional phase from imaginary part:
     \[
     \text{Im}(\alpha) \cdot \ln(r) = 0.5 \cdot \ln(\sqrt{2}) = 0.5 \cdot \frac{\ln(2)}{2} = \frac{\ln(2)}{4} \approx 0.1733
     \]

The total phase:
\[
\phi = \frac{\pi}{8} + i\frac{\ln(2)}{4} \approx 0.3927 + 0.1733
\]

#### 3. Combining Magnitude and Phase
The final scaled value is:
\[
z^\alpha = r^{\text{Re}(\alpha)} \cdot e^{i\phi}
\]
Numerically:
\[
z^\alpha = 1.1892 \cdot e^{i(0.3927 + 0.1733)} \approx 0.6778 + 0.4306i
\]

---

### **Graphical Representation**

We can visualize the effect of complex scaling by plotting the original \(z\) and the scaled \(z^\alpha\) on the complex plane.

![complex_scaling](images/complex_scaling_plot.png)

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <!-- Background -->
  <rect x="0" y="0" width="1200" height="800" fill="#f4f4f4" />

  <!-- Title -->
  <text x="600" y="50" font-size="28" text-anchor="middle" fill="#333">
    Visualization of Complex Scaling: z = 1 + i, α = 0.5 + 0.5i
  </text>

  <!-- Axes -->
  <line x1="100" y1="700" x2="1100" y2="700" stroke="#bbb" stroke-width="2" />
  <line x1="600" y1="100" x2="600" y2="700" stroke="#bbb" stroke-width="2" />
  <text x="1090" y="720" font-size="14" fill="#333">Re</text>
  <text x="620" y="120" font-size="14" fill="#333">Im</text>

  <!-- Original z (1+i) -->
  <circle cx="700" cy="500" r="6" fill="#ff0000" />
  <text x="710" y="495" font-size="14" fill="#333">(1 + i)</text>

  <!-- Scaled z^α (0.6778 + 0.4306i) -->
  <circle cx="680" cy="560" r="6" fill="#0000ff" />
  <text x="690" y="555" font-size="14" fill="#333">
    (0.6778 + 0.4306i)
  </text>

  <!-- Connection Arrow -->
  <line x1="700" y1="500" x2="680" y2="560" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />

  <!-- Explanation Section -->
  <rect x="100" y="100" width="400" height="200" rx="10" ry="10" fill="#ffffff" stroke="#999" stroke-width="1" />
  <text x="120" y="130" font-size="16" fill="#333">Steps:</text>
  <text x="120" y="160" font-size="14" fill="#333">
    1. Polar Form of z: |z| = √2, θ = π/4
  </text>
  <text x="120" y="180" font-size="14" fill="#333">
    2. Apply Scaling:
  </text>
  <text x="140" y="200" font-size="12" fill="#333">
    z^α = r^Re(α) * e^(-Im(α)θ) * e^(i(Re(α)θ + Im(α)ln(r)))
  </text>
  <text x="120" y="220" font-size="14" fill="#333">
    3. Result: 0.6778 + 0.4306i
  </text>

  <!-- Formula Node -->
  <rect x="800" y="150" width="300" height="100" rx="10" ry="10" fill="#ffffff" stroke="#999" stroke-width="1" />
  <text x="950" y="180" font-size="16" text-anchor="middle" fill="#333">
    Formula:
  </text>
  <text x="950" y="210" font-size="14" text-anchor="middle" fill="#333">
    z^α = |z|^Re(α) * e^(iφ)
  </text>
  <text x="950" y="230" font-size="14" text-anchor="middle" fill="#333">
    φ = Re(α)θ + Im(α)ln(|z|)
  </text>

  <!-- Marker for Arrows -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
    </marker>
  </defs>
</svg>



This transformation is particularly interesting because both the base and the exponent are complex numbers, which makes it a rich mathematical operation with applications in various fields like signal processing and complex analysis.


---

### **Results from Visualization**
1. **Original Point**: The red point corresponds to the original complex number \( z = 1 + 1i \).
2. **Scaled Point**: The blue point represents the result of \( z^\alpha \), showing both magnitude scaling and rotation on the complex plane.

---

### **Insight**
- Complex scaling simultaneously **stretches** the magnitude and **rotates** the phase of \(z\).
- The operation preserves some geometric properties (e.g., smooth mapping of lines into curves), which is critical for fractal generation in the MIS.
- Observing these transformations helps understand how \(z^\alpha\) contributes to fractal properties and symmetry breaking in the full MIS.



# Step 2: Adding the Logarithm

Next, we incorporate the logarithm of 𝑧, which introduces **nonlinearity** into the transformation.

Code Implementation:

SAMPLE:

Complex logarithm of z=(1+1j): (0.34657359027997264+0.7853981633974483j)


### **Understanding the Complex Logarithm Result**

The result of the complex logarithm for \( z = 1 + i \) is:
\[
\log(z) = 0.3466 + 0.7854i
\]

This value combines two key components:
1. The **magnitude** (\(\ln|z|\)): Represents the natural logarithm of the modulus of \(z\).
2. The **phase** (\(\arg(z)\)): Represents the angle of \(z\) in the complex plane.

---

### **Mathematical Breakdown**

#### 1. Polar Representation of \(z\)
The complex logarithm is defined as:
\[
\log(z) = \ln|z| + i \arg(z),
\]
where:
- \( |z| \) is the modulus: \( |z| = \sqrt{x^2 + y^2} \)
- \( \arg(z) \) is the phase (angle): \( \arg(z) = \tan^{-1}\left(\frac{y}{x}\right) \)

For \( z = 1 + i \):
1. **Modulus**:
   \[
   |z| = \sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.4142
   \]
2. **Phase**:
   \[
   \arg(z) = \tan^{-1}\left(\frac{1}{1}\right) = \frac{\pi}{4} \approx 0.7854
   \]

#### 2. Applying the Logarithm
1. The magnitude term is:
   \[
   \ln|z| = \ln(\sqrt{2}) = \frac{\ln(2)}{2} \approx 0.3466
   \]
2. Combine the terms:
   \[
   \log(z) = 0.3466 + 0.7854i
   \]

---

### **Graphical Representation**

The complex logarithm maps a point \(z\) in the complex plane to a new point whose:
1. **Real part** is based on the magnitude (\(\ln|z|\)).
2. **Imaginary part** is based on the angle (\(\arg(z)\)).

We can visualize this by plotting:
1. The original point \(z = 1 + i\) in the complex plane.
2. The logarithmic transformation \(\log(z)\) in a new space.

![plot_complex_logarithms](images/plot_complex_logarithm.png)

### **Results from Visualization**

#### Graph 1: Original Complex Number
- The red dot represents the complex number \(z = 1 + i\) in the complex plane.

#### Graph 2: Complex Logarithm
- The blue dot shows the logarithmic transformation \(\log(z)\), with:
  - The **real part** (\(0.3466\)) indicating the magnitude scaling (\(\ln|z|\)).
  - The **imaginary part** (\(0.7854\)) representing the phase (\(\arg(z)\)).

---

### **Insight**
- The complex logarithm separates \(z\) into **magnitude** and **phase**, effectively mapping it to a new coordinate system.
- This transformation is central to the **MIS** equation as it allows nonlinear scaling and rotation via \((\log(z))^\beta\).
- Observing this mapping visually helps understand how the logarithmic component contributes to the dynamic morphing in the full MIS.



---

### **Mathematical Foundations**
1. Define the basic elements of the MIS equation:
   - Complex numbers
   - Power-law scaling (\(z^\alpha\))
   - Logarithmic term (\(\log(z)\))
   - Time-dependent rotation via exponential (\(\exp(i \cdot t \cdot (\log(z))^\beta)\))


1. **Test for Scale Invariance**: Verify the MIS property \(S(kz, t) = k^\alpha S(z, t)\) for \(t=0\).
   - Write a test to compare \(S(kz, t)\) and \(k^\alpha S(z, t)\) numerically.

2. **Introduce Iteration**: Implement iterative applications of \(S_{\alpha,\beta}\) to study emergent properties like fractals.

3. **Visualize the Spiral**:
   - Generate 2D plots to visualize the MIS structure for \(t=0\) and \(t \neq 0\).
   - Vary \(\alpha\), \(\beta\), and \(t\) to observe transformations.

4. **Expand Tests**:
   - Rotational symmetry: \(S(e^{i\theta}z, t) = e^{i\alpha\theta} S(z, t)\)
   - Time evolution: Numerical versus analytical derivatives with respect to \(t\).


# **Time-Dependent Rotation**

We now introduce the time evolution term

\[
\exp\left(i \cdot t \cdot (\log(z))^\beta\right)
\]


SAMPLE:

`Time rotation result for z=(1+1j), t=1.0, beta=1.0: (0.4288290062943678+0.15487175246424675j)`

**Description:**
- Introduces dynamics by rotating \( z \) based on \( \log(z) \).
- Varies with time (\( t \)) and the complexity of \( \beta \).

**Research Goal:**
This term breaks scale invariance as \( t \) grows, allowing us to study time-dependent transformations.


![mis_transformation](images/mis_transform.png)



Combining the Components:

Finally, we combine the scaling and time evolution to construct the full MIS transformation.





