# Team Dose-T Gallery Images

## How to Add Your Photos

1. **Create the folder structure:**
   - Navigate to: `public/media/gallery/`
   - Create two subfolders: `2025/` and `2026/`
   - This is where your gallery images go, organized by year

2. **Name your images:**
   - Rename your 25 photos for 2025 to: `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, ... `image-25.jpg`
   - Rename your 25 photos for 2026 to: `image-1.jpg`, `image-2.jpg`, `image-3.jpg`, ... `image-25.jpg`
   - You can also use `.png` or `.jpeg` extensions if preferred

3. **Upload images:**
   - Place all 25 images for 2025 in: `public/media/gallery/2025/`
   - Place all 25 images for 2026 in: `public/media/gallery/2026/`
   - The gallery will automatically display them in separate year sections

4. **File naming convention:**
   - For 2025: `image-1.jpg`, `image-2.jpg`, ... `image-25.jpg`
   - For 2026: `image-1.jpg`, `image-2.jpg`, ... `image-25.jpg`

5. **Image specifications:**
   - Recommended size: 800x600px or larger
   - Formats supported: JPG, JPEG, PNG
   - Keep file sizes under 500KB for optimal loading

## Folder Structure
```
public/
├── media/
│   ├── gallery/
│   │   ├── 2025/
│   │   │   ├── image-1.jpg
│   │   │   ├── image-2.jpg
│   │   │   ├── ...
│   │   │   └── image-25.jpg
│   │   ├── 2026/
│   │   │   ├── image-1.jpg
│   │   │   ├── image-2.jpg
│   │   │   ├── ...
│   │   │   └── image-25.jpg
│   │   └── README.md (this file)
```

## Notes
- The gallery displays 50 total images across two year sections (25 per year)
- Each year section displays in a responsive grid (1 column on mobile, 3 columns on desktop)
- Hover effects are built-in - images zoom and show overlay text with year and achievement number on hover
- All images are served from the public folder, so they load quickly
- Year sections are clearly labeled with 2025 (primary blue) and 2026 (accent lime green) headers
