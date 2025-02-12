# ProteicPulseLog
 Allegy Tracking Web App

# Project: App-Allergic-Prevention

## Why and Background

My project is designed to combat allergies in our increasingly allergy-prone societies. This project aligns with the UN SDG goal, "Health and Well-Being" (Goal 3). Allergies negatively impact our health, causing deadly allergy attacks, pain, and decreased quality of life.  They hinder progress towards SDG 3. Reducing or preventing allergies, even to a small extent, would significantly advance this goal.

## My Action

To contribute to SDG 3, "Health and Well-Being," I am developing an allergy tracking app.  In recent years, my immune system and other bodily organs have experienced disharmony. I have suffered numerous allergy attacks, including hives and other less pronounceable reactions. To address these issues, I am creating an app where I can log my food intake and track allergy-related events. The app will provide a simple and quick journal to record what I'm eating, when I experience discomfort, and a tracker to correlate my diet, temperature, and weather conditions with these events.

## Example User Flow

## Login/Signup

- Only displayed if the user is not already logged in upon install.
- Requires internal storage or a server, depending on the infrastructure and tech stack.

## Dashboard

- Displays recent items at the top of the screen.
- Indicates the number of days since the last allergy incident or bodily malfunction.
- Contains two buttons:

1. **Report Diet Button:**
   - Creates a quick entry for the date with two columns:
     - `Food::String`
     - `Weather::Triple::Temp,Wind,Rain,Humidity`

2. **Report Bodily Malfunction Button:**
   - Adds an entry with the date to a column in the likely SQL-like database used by the "Report Diet Button" feature.
