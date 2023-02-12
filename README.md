# ABOUT #

Application for training management with admin, coach and fellow level access control. This tool allows admins create course, modules and cohorts for each course. Coach can add marks for modules they are responsible for. Additionally fellows can view their progress in the course.

Customer currently use [this Speard Sheet](https://docs.google.com/spreadsheets/d/1aP7ak9zuaZvAPsO0tCyGtfyJ7M6Bgwk9Bs0RLTVXeGE/edit?usp=sharing) for manging their workflow.

## Users ##
There are 3 different user types
- Admin
- Coach
- Fellow

Only Admin and Coach shall be listed in user management section which is accessible only to admin.
Fellows are added and managed directly in the cohort management.

## Initial Tasks (Deadline Saturday 25th July, 2020) ##
- [x] Initial project structure
- [x] Authorization URL
- [x] Menu auto filter based on authorization
- [x] Authentication
- [x] Dashboard Structure
- [x] Login page
- [x] User management (Adding and removing Admin, Tutor)
    - [x] List Users
    - [x] Add User
    - [x] Edit User
    - [x] Delete User
    - [x] Password recovery
    - [x] Password Change
- [x] Cohort management (Adding and removing cohort)
    - [x] List cohorts
    - [x] Add cohort
    - [x] Edit Cohort
    - [x] Delete Cohort
    - [x] Delete all fellows on cohort deletion
- [x] Add remove fellow in different cohorts
    - [x] List fellow
    - [x] Add fellow
    - [x] Edit fellow
    - [x] Delete fellow

## Next Steps (Deadline Thursday 30th July, 2020) ##
- [x] Training area configuration (Consider training areas as template for cohort)
    - [x] Three training types (Task Based, Observation Based, Monthly Tasks)
    - [x] Create Training Area based on training type (Doesn't add automatically to cohorts)
    - [x] Details training area
    - [x] Update training area (Name, Type specific configuration & default coach, training type can't be modified)
    - [x] Delete Training Area (Leave active in other cohorts)
- [x] In cohort management
    - [x] When creating new cohort, all training areas shall be added in `trainings[]`
    - [x] On editing cohort, training areas can be added or removed like Coaches.
    - [x] In cohort details, show training areas as a list at the bottom (Each row only shall have edit option)
    - [x] On editing a training area in a cohort, shall have one extra button `Reset`, and updating here shall only affect training area in the cohort.
    - [x] On reset, that training area with relevent id in the cohort shall be updated from global training configuration
- [x] Point entry for Coach
    - [x] List trainings to mark
    - [x] List fellows to mark (With overview for the training)
    - [x] Task based point entry
    - [x] Observational point entry
    - [x] Monthly task point entry
- [x] Point review for admin
    - [x] In fellow details page admins can review progress
    - [x] Click on each training area and see
    - [x] For task based training
        - [x] Detailed task based points with who alocated the points
        - [x] Update task based points
    - [x] For observational training
        - [x] Detailed observational points with who alocated the points
        - [x] Update observational points
    - [x] For monthly task based training
        - [x] Detailed monthly task points with who alocated the points
        - [x] Update monthly task points
- [x] Fellow's progress dashboard.
    - [x] Fellows can review progress

### Point Entry ###
There are three types of point entry methods for different training types. Please check the wireframe bellow for reference.

![Task Based Point Entry](https://github.com/shuhan/training-management/raw/master/docs/taskbased-marking.png)*Task Based/Monthly Task Based Point Entry*

![Observational Point Entry](https://github.com/shuhan/training-management/raw/master/docs/observational-marking.png)*Observational Point Entry*