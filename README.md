# Dhishan's First Birthday Invitation

A vintage stationery-inspired, mobile-friendly birthday invitation website with:
- Animated envelope opening and confetti
- Muted powder-blue and butter-yellow pinstripes inspired by the Canva reference
- Editable date, time, venue and Google Maps link
- Live countdown (starts when `partyDate` is set)
- Text-first invitation with no personal photos
- Google Forms RSVP button
- No build tools or paid hosting required

## 1. Personalise the invitation

Open `config.js` and replace the empty values with your party details. Example:

```js
window.PARTY_CONFIG = {
  childName: "Dhishan",
  partyDate: "2026-11-22T11:00:00+10:30",
  dateLabel: "Sunday, 22 November 2026",
  timeLabel: "11:00 am – 2:00 pm",
  venueName: "Community Hall",
  venueAddress: "123 Example Street, Adelaide SA",
  mapsUrl: "https://maps.google.com/?q=123+Example+Street+Adelaide",
  googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
};
```

The example date/time/venue above are examples only. Replace them with the actual party details. Adelaide is normally on UTC+10:30 in November; the example date is not a confirmed event date.

## 2. Photos and privacy

This version does not display a photo gallery and does not require you to upload or share any personal pictures. The invitation uses decorative shapes and text instead.

## 3. Create a Google Form for RSVPs

1. Open [Google Forms](https://forms.google.com) and create a blank form.
2. Suggested title: **Dhishan's First Birthday — RSVP**
3. Add questions:
   - Guest name (short answer, required)
   - Will you be joining us? (Yes / No, required)
   - Number of guests attending (dropdown or short answer)
   - Dietary requirements (optional)
   - Anything else we should know? (optional)
4. Click **Send** or **Publish** (wording may vary), then copy the public responder link. Do not use the editor URL.
5. The supplied RSVP link is already configured in `config.js`; replace it only if you make a new form.

Test the link in a private/incognito window to make sure guests can open it.

## 4. Publish on GitHub Pages

You can do this in a browser; you do not need to install Git.

1. Sign in to [GitHub](https://github.com/).
2. Create a new repository named `dhishan-first-birthday`. If using GitHub Free, make it **Public** for the simplest Pages setup.
3. Open the new repository and choose **Add file → Upload files**.
4. Upload the *contents* of this folder, not the ZIP itself. Upload `index.html`, `style.css`, `script.js`, `config.js`, `.nojekyll`, `README.md`, and the `assets` folder with its images.
5. Commit the upload to the `main` branch.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch **main**, folder **/(root)**, then click **Save**.
9. Wait a few minutes, then return to Settings → Pages and open the published site link. The first deployment can take up to about 10 minutes.

Your site address will look like:
`https://YOUR-GITHUB-USERNAME.github.io/dhishan-first-birthday/`

## 5. Before sharing with guests

- Open the site on a phone.
- Tap the envelope and test the animation.
- Check date, time, venue and map link.
- Confirm the countdown is correct.
- Test every gallery photo.
- Submit a test RSVP.
- Remember that the website and repository are public. Do not include private details you don't want public.
- If you change a file later, upload the changed file and commit it; Pages republishes automatically.

## Troubleshooting

- **Site shows a 404:** check Settings → Pages, make sure `main` and `/(root)` are selected, and confirm `index.html` is at the repository root.
- **Changes don't appear:** wait a few minutes and refresh; check the repository's **Actions** tab for a Pages deployment error.
- **Countdown doesn't run:** check that `partyDate` is a valid date-time string in `config.js`.
- **RSVP button shows a reminder:** paste the Google Forms public responder URL into `googleFormUrl`.
- **A photo doesn't show:** confirm its filename and the paths in `index.html` match exactly, including upper/lowercase letters.
