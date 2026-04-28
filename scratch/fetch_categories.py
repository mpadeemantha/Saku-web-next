import urllib.request
import json

url = "https://cms.sakujls.lk/wp-json/wp/v2/categories?per_page=100"
with urllib.request.urlopen(url) as response:
    data = json.loads(response.read().decode())
    for cat in data:
        print(f"ID: {cat['id']}, Name: {cat['name']}, Parent: {cat['parent']}, Slug: {cat['slug']}")
