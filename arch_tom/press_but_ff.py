from pyvirtualdisplay import Display
from selenium import webdriver

with Display():
    browser = webdriver.Firefox()

    try:
        driver.get('https://www.google.com/')
        print(browser.title)

    finally:
        browser.quit()
