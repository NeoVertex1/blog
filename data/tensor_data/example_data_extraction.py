# you can get way more data from these kernels but this is a start, I will post more soon or not

import torch
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from complextensor import ComplexTensor
import pickle

# Load the tensors
with open('kernel_dim_32.pkl', 'rb') as f:
    kernel_32 = pickle.load(f)
with open('kernel_dim_512.pkl', 'rb') as f:
    kernel_512 = pickle.load(f)

# Calculate magnitudes
magnitude_32 = torch.sqrt(kernel_32.real**2 + kernel_32.imag**2)
magnitude_512 = torch.sqrt(kernel_512.real**2 + kernel_512.imag**2)

# Create visualizations
plt.figure(figsize=(15, 5))

# Plot kernel_32
plt.subplot(121)
sns.heatmap(magnitude_32.numpy(), cmap='viridis')
plt.title('Magnitude of Kernel 32x32')

# Plot kernel_512
plt.subplot(122)
sns.heatmap(magnitude_512.numpy(), cmap='viridis')
plt.title('Magnitude of Kernel 512x512')

plt.tight_layout()
plt.show()

# Print comprehensive statistics
def print_tensor_stats(name, tensor, magnitude):
    print(f"\n{name} Statistics:")
    print(f"Shape: {tensor.shape}")
    print(f"Non- values (real): {torch.sum(~torch.isnan(tensor.real)).item()}")
    print(f"Non- values (imag): {torch.sum(~torch.isnan(tensor.imag)).item()}")
    print(f"Max magnitude: {torch.max(magnitude[~torch.isnan(magnitude)]).item():.2e}")
    print(f"Min magnitude: {torch.min(magnitude[~torch.isnan(magnitude)]).item():.2e}")
    
print_tensor_stats("Kernel 32", kernel_32, magnitude_32)
print_tensor_stats("Kernel 512", kernel_512, magnitude_512)
