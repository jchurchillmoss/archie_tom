from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time

#PATH = "C:\Program Files (x86)\geckodriver.exe"
class runFFtest():

    def testmethod(self):

        driver = webdriver.Firefox(executable_path="C:\\Program Files (x86)\\geckodriver")
        driver.get("https://www.bandsintown.com/a/15393672-tom-moore-and-archie-moss?came_from=250&utm_medium=web&utm_source=artist_event_page&utm_campaign=artist")

obj = runFFtest()
obj.testmethod()
#time.sleep(5)

#link = driver.find_element_by_class_name("H51SAB7T1wuxbof9sTUK-")
#link.click()

#time.sleep(5)

#elems = driver.find_elements_by_xpath("//a[@href]")
#for elem in elems:
#    if '/e/' in elem.get_attribute("href"):
#        print(elem)
        #infos = elem.find_elements_by_xpath('//div[contains(text(), "{0}") and @class="inner"]'.format(text))
        #for info in infos:
        #    print(info)
#driver.quit()
