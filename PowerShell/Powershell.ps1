# https://www.tutorialspoint.com/powershell/index.htm
Get-Help Add-AppxPackage # Gives explaination of how to give a command and its parameter
######################
# Files and Folders #
####################
New-Item -Path 'D:\temp\Test Folder' -ItemType Directory # Create Test Folder
New-Item -Path 'D:\temp\Test Folder\Test File.txt' -ItemType File # Create Test File.txt
Copy-Item 'D:\temp\Test Folder' 'D:\temp\Test Folder1' # Copy Test Folder1
Copy-Item 'D:\temp\Test Folder' -Destination 'D:\temp\Test Folder1' # Recursively copy Test Folder and contents to Test Folder1
Copy-Item 'D:\temp\Test Folder\Test File.txt' 'D:\temp\Test Folder1\Test File1.txt' # Copy Test File1.txt to Test Folder1 with content of Test File.txt (Test Folder1 should already exist)
Copy-Item -Filter *.txt -Path 'D:\temp\Test Folder' -Recurse -Destination 'D:\temp\Test Folder1' # Recursively copy Test Folder to Test Folder1 along with all .txt files
Remove-Item 'D:\temp\Test Folder1' # Delete Test Folder1. PowerShell confirms if directory is not empty
Remove-Item 'D:\temp\Test Folder1' -Recurse # Recursively remove Test Folder1. Simply delete
Remove-Item 'D:\temp\Test Folder\test.txt' # Delete test.txt. Powershell confirms if directory is not empty
Remove-Item 'D:\temp\Test Folder' -Recurse # Recursively remove Test Folder. Simply delete
Move-Item D:\temp\Test D:\temp\Test1 # Move Test to inside Test1 along with contents
Move-Item D:\temp\Test\Test.txt D:\temp\Test1 # Move Test.txt from to Test1
Rename-Item D:\temp\Test D:\temp\Test1 # Rename Test to Test1
Rename-Item D:\temp\Test\test.txt test1.txt # Rename test.txt to test1.txt
Get-Content D:\temp\Test\test.txt # Read test.txt to console
(Get-Content D:\temp\test\test.txt).length # Read length of test.txt to console
Test-Path D:\temp\test # Prints True if test folder exists in temp, False if not
Test-Path D:\temp\test\test.txt # Prints true if test.txt exists in test, False if not

#####################
# Dates and Timers #
###################
Get-Date # Returns Date; ex: Saturday, May 05, 2018 9:58:06 AM
set-date -Date (Get-Date).AddDays(1) # Add one more day to current date; ex: Saturday, May 06, 2018 9:58:16 AM
Get-Date -DisplayHint Date # Print only date, no time; ex: Wednesday, April 04, 2018
Get-Date -DisplayHint Time # Print only time, no date; ex: 5:26:36 PM
$timeToAdd = New-TimeSpan -Minutes 60
set-date -adjust $timeToAdd # Adjust date as 60 min from now

########################
# File I/O Operations #
######################
New-Item D:\temp\test\test.txt # Create test.txt in D:\temp\test
Set-Content D:\temp\test\test.txt 'Hello' # Set content of test.txt to Hello
Get-Content D:\temp\test\test.txt # Prints 'Hello'
Add-Content D:\temp\test\text.txt 'World!' # Appends 'World!' to test.txt
Get-Content D:\temp\test\text.txt # Prints 'Hello\nWorld!' (not sure if \n is in there exactly but it will print two lines)
### Might be able to add -NoNewLine flag in order to not append a new line??
Clear-Content D:\temp\test\test.txt # Erase content of test.txt
New-Item D:\temp\test\test.xml -ItemType File # Create test.xml as File. Same example for csv and html

#####################
# Advanced Cmdlets #
###################
# Get-Unique
$list = "one","two","two","three","four","five"
$list # Prints one\ntwo\ntwo\nthree\nfour\nfive ; notice duplicate 'two'
$list | sort | get-unique # Prints five\nfour\none\nthree\ntwo ; Removes duplicate 'two' and sorts alphabetically

# Group-Object ### MISSING #########################

# Measure-Object 
get-content D:\temp\test\test.txt | measure-object -character -line -word # Prints:
# Lines	Words	Characters	Property
# -----	-----	----------	--------
#   1     3           29
Get-ChildItem | Measure-Object # Prints:
# Count		: 25
# Average	:
# Sum		:
# Maximum	:
# Minimum	:
# Property	:

# Compare-Object
# D:\temp\test\test.txt contains "Welcome to TutorialsPoint.Com"
# test1.txt contains "Hello World!" and "Welcome to TutorialsPoint.Com" in two lines
Compare-Object -ReferenceObject $(Get-Content D:\temp\test\test.txt) -DifferenceObject $(Get-Content D:\temp\test\test1.txt) # Common lines are displayed; Prints:
# InputObject	SideIndicator
# -----------	-------------
# Hello World!	=>
Compare-Object -ReferenceObject $(Get-Content D:\temp\test\test.txt) -DifferenceObject $(Get-Content D:\temp\test\test1.txt) -IncludeEqual # Equal lines are included; Prints:
# InputObject						SideIndicator
# -----------						-------------
# Welcome to TutorialsPoint.com		==
# Hello World!						=>

# Format-List
# D:\temp\test\test.txt contains "Welcome to TutorialsPoint.Com"
# test1.txt contains "Hello World!" and "Welcome to TutorialsPoint.Com" in two lines
$A = Get-ChildItem D:\temp\test\*.txt # Get file details into $A
Format-List -InputObject $A # Get file details; Prints:
# Directory: D:\temp\test
#
# Name           : test.txt
# Length         : 31
# CreationTime   : 4/4/2018 4:48:38 PM
# LastWriteTime  : 4/11/2018 4:40:15 PM
# LastAccessTime : 4/4/2018 4:48:38 PM
# VersionInfo    : File:             D:\temp\test\test.txt
                 # InternalName:     
                 # OriginalFilename: 
                 # FileVersion:      
                 # FileDescription:  
                 # Product:          
                 # ProductVersion:   
                 # Debug:            False
                 # Patched:          False
                 # PreRelease:       False
                 # PrivateBuild:     False
                 # SpecialBuild:     False
                 # Language:         
#                  
# 
# Name           : test1.txt
# Length         : 44
# CreationTime   : 4/12/2018 6:54:48 PM
# LastWriteTime  : 4/12/2018 6:56:21 PM
# LastAccessTime : 4/12/2018 6:54:48 PM
# VersionInfo    : File:             D:\temp\test\test1.txt
                 # InternalName:     
                 # OriginalFilename: 
                 # FileVersion:      
                 # FileDescription:  
                 # Product:          
                 # ProductVersion:   
                 # Debug:            False
                 # Patched:          False
                 # PreRelease:       False
                 # PrivateBuild:     False
                 # SpecialBuild:     False
                 # Language:         
Get-Service | Format-List # Get the list of services; Prints:
# Name                : AdobeARMservice
# DisplayName         : Adobe Acrobat Update Service
# Status              : Running
# DependentServices   : {}
# ServicesDependedOn  : {}
# CanPauseAndContinue : False
# CanShutdown         : False
# CanStop             : True
# ServiceType         : Win32OwnProcess
# 
# Name                : AdobeFlashPlayerUpdateSvc
# DisplayName         : Adobe Flash Player Update Service
# Status              : Stopped
# DependentServices   : {}
# ServicesDependedOn  : {}
# CanPauseAndContinue : False
# CanShutdown         : False
# CanStop             : False
# ServiceType         : Win32OwnProcess
# ...

# Format-Wide
https://www.tutorialspoint.com/powershell/powershell_cmdlets_format_wide.htm