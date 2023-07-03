import os
from pathlib import Path

from PIL import Image

if __name__ == '__main__':
  p = Path('src/assets/sponsoren')
  files = os.listdir(p)
  for f in files:

    if f == 'min':
      continue
    print(f)
    origin_path = p.joinpath(f)
    new_path = p.joinpath('min').joinpath(f)
    img = Image.open(p.joinpath(f))
    if img.width > 500:
      new_height = 500 * img.height / img.width
      img.thumbnail([500, new_height], Image.ANTIALIAS)
      img.save(new_path)
    else:
      img.save(new_path)
