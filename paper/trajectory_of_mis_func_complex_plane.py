import numpy as np
import matplotlib.pyplot as plt

# Define the MIS function
def mis_function(z, alpha, beta, t):
    z_alpha = z**alpha
    log_z = np.log(z)
    exp_term = np.exp(1j * t * (log_z**beta))
    return z_alpha * exp_term

# Parameters
z = 1 + 1j
alpha = 0.5 + 0.5j
beta = 1.0
t_values = np.linspace(0, 10, 1000)  # Time values from 0 to 10

# Compute MIS values
mis_values = [mis_function(z, alpha, beta, t) for t in t_values]

# Extract real and imaginary parts
real_parts = [val.real for val in mis_values]
imag_parts = [val.imag for val in mis_values]

# Plotting
plt.figure(figsize=(8, 6))
plt.plot(real_parts, imag_parts, label='Trajectory of MIS(z, t)')
plt.scatter([real_parts[0]], [imag_parts[0]], color='red', label='Start (t=0)')
plt.scatter([real_parts[-1]], [imag_parts[-1]], color='blue', label='End (t=10)')
plt.xlabel('Real Part')
plt.ylabel('Imaginary Part')
plt.title('Trajectory of MIS Function in the Complex Plane')
plt.legend()
plt.grid(True)
plt.axis('equal')

save_path = "/content/drive/My Drive/mis_paper/mis_trajectory.png" 
plt.show()
