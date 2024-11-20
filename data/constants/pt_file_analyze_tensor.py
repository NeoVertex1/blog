# simple code to extract data from the pt files

import torch
from complextensor import ComplexTensor

def analyze_tensor(file_path):
    """
    Load and analyze a ComplexTensor from a local file.

    Args:
        file_path (str): Path to the `.pt` file containing the tensor.

    Returns:
        dict: A dictionary with analysis results for real and imaginary parts.
    """
    # Load the tensor file
    try:
        tensor_data = torch.load(file_path)
        real_part = tensor_data['real']
        imag_part = tensor_data['imag']

        # Create a ComplexTensor instance
        tensor = ComplexTensor(real_part, imag_part)

        # Analyze real and imaginary parts
        real_norm = torch.norm(tensor.real).item()
        imag_norm = torch.norm(tensor.imag).item()

        real_stats = {
            'mean': tensor.real.mean().item(),
            'std': tensor.real.std().item(),
            'min': tensor.real.min().item(),
            'max': tensor.real.max().item(),
        }

        imag_stats = {
            'mean': tensor.imag.mean().item(),
            'std': tensor.imag.std().item(),
            'min': tensor.imag.min().item(),
            'max': tensor.imag.max().item(),
        }

        # Print results
        print("Analysis of the ComplexTensor:")
        print(f"Real Part Shape: {tensor.real.shape}")
        print(f"Imaginary Part Shape: {tensor.imag.shape}")
        print(f"Real Norm: {real_norm}")
        print(f"Imaginary Norm: {imag_norm}")
        print("Real Part Stats:", real_stats)
        print("Imaginary Part Stats:", imag_stats)

        return {
            'real_shape': tensor.real.shape,
            'imag_shape': tensor.imag.shape,
            'real_norm': real_norm,
            'imag_norm': imag_norm,
            'real_stats': real_stats,
            'imag_stats': imag_stats,
        }

    except Exception as e:
        print(f"Error loading or analyzing the tensor: {e}")
        return None

# Example usage
if __name__ == "__main__":
    file_path = "/Users/atlas/production/src/quantum_state_processor/tensor_q4_d8_t14.pt"  # Replace with your local file path
    analyze_tensor(file_path)
