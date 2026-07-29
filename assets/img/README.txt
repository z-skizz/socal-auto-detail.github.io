SOCAL LUXURY DETAILING — PHOTO DROP-IN GUIDE
==============================================
This folder is empty on purpose. Every image on the site is wired
up to look for a specific filename right here in assets/img/. The
moment you add a correctly-named file, it appears on the live site
automatically — no HTML or CSS editing required.

Until a file exists, that spot on the site shows an elegant gold
placeholder frame explaining exactly what shot belongs there, so
nothing ever looks broken.

ADD YOUR 8 PHOTOS WITH THESE EXACT FILENAMES:
----------------------------------------------
photo-a.jpg   Square.      Nighttime lighting rig + stepping stool next to a
                            Mercedes E350 on the driveway.
                            Used on: about.html (story section)

photo-b.jpg   16:9 wide.   Same driveway/client, BMW X330M at night with the
                            lighting rig + stepping stool in frame.
                            Used on: index.html (hero background photo)

photo-c.jpg   9:16 tall.   Close-up of a technician cleaning a Tesla hood
                            with a microfiber towel.
                            Used on: index.html (service area section)

photo-d.jpg   16:9 wide.   Technician detailing a McLaren 600LT from the
                            side, daytime, vacuum + bucket in frame.
                            Used on: our-work.html (gallery — "on the job")

photo-e.jpg   5:3 wide.    Clean McLaren 600LT from the side, daytime.
                            Used on: our-work.html (gallery — "the result")

photo-f.jpg   5:4.         Lamborghini Urus interior, dirty/before.
                            Used on: our-work.html (before/after — Before)

photo-g.jpg   5:4.         Lamborghini Urus interior, clean/after.
                            Used on: our-work.html (before/after — After)

photo-h.jpg   Square.      Lamborghini Urus with all four doors open.
                            Used on: about.html (signature feature section)

OPTIONAL EXTRA GALLERY SLOTS (already wired up, purely optional):
------------------------------------------------------------------
photo-i.jpg   9:16 tall.   Any future job photo — fills a gallery slot on
                            our-work.html automatically.
photo-j.jpg   Square.      Same as above — another open gallery slot on
                            our-work.html.

HOW TO REPLACE A PLACEHOLDER LATER:
------------------------------------
Just overwrite the file with a new photo, keeping the exact same
filename (e.g. re-save your new shot as photo-a.jpg). No code
changes needed — refresh the page and it's live.

TIPS:
-----
- JPG works fine. If you use a different format (.png, .webp), update
  the matching <img src="..."> in the HTML file(s) listed above to
  match the new extension.
- Keep files reasonably compressed (under ~500KB each is plenty for
  web use) so the site stays fast — most phone photos will need to be
  resized down from their original size.
- Landscape/portrait orientation matters more than exact pixel size —
  each slot crops to fill its frame (object-fit: cover), so as long as
  the photo roughly matches the aspect ratio above it'll look right.
