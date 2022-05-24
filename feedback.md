# Forage Parking

Overall good work on this - integrating MapBox isn't easy and you all did a great job. There's a lot of solid functionality in here. It is missing a little polish both on the CSS side as well as the code side (lots of commented out code, variable naming conventions etc.) but I know that you sacrificed polish for functionality. Here are a few notes and I also made some comments in individual files.

- When designing mobile first, don't forget about desktop view -- add some breakpoints or max-widths to ensure your app looks good on desktop also
- You have some overlap in your Context files -- remember the purpose of context is to share data across multiple components -- think about whether you really need all that context across multiple views -- can you simplify?
- I tried to signup with the same user and the error message showed `Cannot read properties of null (reading 'id')` instead of the supabase error - you need to move your profile creation below the error throwing
- I think the UX of the profile update could use a little attention - its confusing that you click the button "Edit Profile" to both hide and remove the edit fields -- maybe that could be changed to your save, and when the profile is saved, the edit fields disappear?
- I know its likely a time saving thing, but try to avoid using alerts in your apps - ideally add messaging within your application to alert the user that states have updated
- I know you all were working as a team and mobbing a lot, but next project try to ensure that everyone is getting equal time driving - the commits on this project are a little lopsided.
- Make sure you remove unneeded comments
