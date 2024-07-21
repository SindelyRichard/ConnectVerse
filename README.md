**ConnectVerse**

ConnectVerse is a robust online platform designed for engaging discussions and community interaction. Built with user experience in mind, ConnectVerse offers a variety of features to facilitate seamless communication and knowledge sharing among users.

**Key Features:**
- ❌**User Registration and Authentication:** Easily sign up for a new account or log in securely with existing credentials.
- ❌**Topic Creation and Posting:** Initiate and participate in discussions across diverse categories such as technology, hobbies, advice, and support.
- ❌**Interactive Engagement:** Like posts to show appreciation, comment to share insights, and reply for threaded discussions.
- ❌**Personalization:** Customize user profiles with profile pictures, bios, and additional details to enhance community connections.
- ❌**Search and Navigation:** Effortlessly find specific topics and posts using advanced search functionalities and intuitive navigation.
- ❌**Responsive Design:** Enjoy a user-friendly interface that adapts seamlessly across devices for a consistent browsing experience.

--Work in progress...--
Setup Instructions
To ensure the project functions correctly, please follow these steps:

**Install Composer:**

Download and install Composer from getcomposer.org.
**Install XAMPP:**

Download and install XAMPP from apachefriends.org.
After installation, configure the DocumentRoot to point to the backend directory of your project.
**Clone the Project:**

Clone the repository to your local machine using:
git clone <repository_url>

**Troubleshooting:**

If the project does not work after cloning, execute the following commands:

rm -rf vendor
rm composer.lock
composer install
These commands will remove the existing vendor directory and composer.lock file, then reinstall the dependencies.

**MongoDB Extension:**

Download the MongoDB PHP extension (DLL file) and place it in your PHP ext directory.
Ensure the extension is enabled in your php.ini file:

extension=mongodb.dll
Following these steps should resolve common issues and get the project up and running.

