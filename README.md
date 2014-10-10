# phantomcss example

Test code example using CasperJS and PhantomCSS.

## Install
    git clone https://github.com/snufkon/phantomcss-example
    cd phantomcss-example

## Test
    casperjs test testsuite.js   # First time, generate some screenshots used as baselines
    casperjs test testsuite.js   # Tests

## Example of execution (Success)

```Bash
$ casperjs test testsuite.js
Test file: testsuite.js


New screenshot at ./screenshots/default_is_red_0.png


New screenshot at ./screenshots/change_to_green_1.png


New screenshot at ./screenshots/change_to_blue_2.png


New screenshot at ./screenshots/change_to_red_3.png

Must be your first time?
Some screenshots have been generated in the directory ./screenshots
This is your 'baseline', check the images manually. If they're wrong, delete the images.
The next time you run these tests, new screenshots will be taken.  These screenshots will be compared to the original.
If they are different, PhantomCSS will report a failure.
WARN Looks like you didn't run any test.

$ casperjs test testsuite.js
Test file: testsuite.js


PASS No changes found for screenshot ./screenshots/change_to_blue_2.png


PASS No changes found for screenshot ./screenshots/change_to_green_1.png


PASS No changes found for screenshot ./screenshots/change_to_red_3.png


PASS No changes found for screenshot ./screenshots/default_is_red_0.png

PhantomCSS found 4 tests, None of them failed. Which is good right?

If you want to make them fail, go change some CSS - weirdo.
PASS 4 tests executed in 1.865s, 4 passed, 0 failed, 0 dubious, 0 skipped.
```
