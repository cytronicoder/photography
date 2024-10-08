import os
import tempfile
import shutil


def rename_images(directory):
    # Get a list of files in the directory
    files = os.listdir(directory)

    # Filter out only image files (assuming .jpg, .jpeg, .png extensions)
    image_files = [f for f in files if f.lower().endswith((".png", ".jpg", ".jpeg"))]

    image_files.sort()

    with tempfile.TemporaryDirectory() as temp_dir:
        for index, filename in enumerate(image_files, start=1):
            extension = os.path.splitext(filename)[1]
            new_name = f"{index}{extension}"
            old_path = os.path.join(directory, filename)
            temp_path = os.path.join(temp_dir, new_name)

            shutil.move(old_path, temp_path)
            print(f"Temporarily renamed: {filename} -> {new_name}")

        for temp_file in os.listdir(temp_dir):
            shutil.move(
                os.path.join(temp_dir, temp_file), os.path.join(directory, temp_file)
            )
            print(f"Finalized rename: {temp_file}")


if __name__ == "__main__":
    images_directory = "public/images"
    rename_images(images_directory)
