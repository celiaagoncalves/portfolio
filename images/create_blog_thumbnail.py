from PIL import Image, ImageDraw, ImageFont
import os

# Create image with dark background
width, height = 1200, 630
bg_color = (12, 12, 20)  # #0c0c14
image = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(image, 'RGBA')

# Purple accent color
purple = (139, 92, 246)  # #8b5cf6
white = (255, 255, 255)
light_gray = (169, 169, 169)  # Light gray for URL

# 1. Left accent bar (8px wide) at full opacity
draw.rectangle([(0, 0), (8, height)], fill=(139, 92, 246, 255))

# 2. Bottom accent bar (1200x8 at y=622 with 0.2 opacity)
alpha_bottom = int(255 * 0.2)
for y in range(622, 630):
    draw.rectangle([(0, y), (width, y+1)], fill=(139, 92, 246, int(255 * 0.2)))

# 3. Circle at (1050, 100) r=60, opacity 0.1
alpha_circle1 = int(255 * 0.1)
draw.ellipse([(1050-60, 100-60), (1050+60, 100+60)], fill=(139, 92, 246, alpha_circle1), outline=None)

# 4. Circle at (150, 550) r=80, opacity 0.08
alpha_circle2 = int(255 * 0.08)
draw.ellipse([(150-80, 550-80), (150+80, 550+80)], fill=(139, 92, 246, alpha_circle2), outline=None)

# 5. Box outline in top-left: (100,120) 280x390 with 0.3 opacity
alpha_box = int(255 * 0.3)
box_x1, box_y1 = 100, 120
box_x2, box_y2 = 100 + 280, 120 + 390
# Draw box outline with stroke
draw.rectangle([(box_x1, box_y1), (box_x2, box_y2)], outline=(139, 92, 246, alpha_box), width=2)

# Load fonts - use default fonts with best available sizes
try:
    # Try to load bold font for "Blog"
    font_blog = ImageFont.truetype("arial.ttf", 72)
    font_subtitle = ImageFont.truetype("arial.ttf", 36)
    font_url = ImageFont.truetype("arial.ttf", 18)
except:
    # Fallback to default font
    font_blog = ImageFont.load_default()
    font_subtitle = ImageFont.load_default()
    font_url = ImageFont.load_default()

# 6. Main text "Blog" in white 72pt bold at (450,220)
draw.text((450, 220), "Blog", fill=white, font=font_blog, anchor="lm")

# 7. Subtitle "Product Ownership" in purple 36pt at (450,300)
draw.text((450, 300), "Product Ownership", fill=purple, font=font_subtitle, anchor="lm")

# 8. Subtitle "Quality & Systems" in purple 36pt at (450,350)
draw.text((450, 350), "Quality & Systems", fill=purple, font=font_subtitle, anchor="lm")

# 9. URL text "celiaagoncalves.github.io" in light gray 18pt at (450,520)
draw.text((450, 520), "celiaagoncalves.github.io", fill=light_gray, font=font_url, anchor="lm")

# Save the image
output_path = r"C:\Users\celia\Documents\GitHub\portfolio\images\blog-thumbnail.png"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
image.save(output_path, 'PNG')
print(f"Image saved successfully to {output_path}")
