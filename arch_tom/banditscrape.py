import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','arch_tom.settings')

import django
django.setup()

import requests
requests.packages.urllib3.disable_warnings()
from at_app.models import Date
from bs4 import BeautifulSoup

Date.objects.all().delete()

result = requests.get("https://www.bandsintown.com/a/15393672-tom-moore-and-archie-moss?came_from=253&utm_medium=web&utm_source=artist_event_page&utm_campaign=artist", verify=False)
src=result.content

soup=BeautifulSoup(src,'lxml')
links = soup.find_all("a")
divs = soup.find_all("div")

x=0
for div in divs:
    if "No upcoming events" in div:
        x=x+1

months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

#for link in links:
#    if link.has_attr('href'):
#        print(link.attrs['href'])

if x==0:
    for link in links:
        for month in months:
            if month in link.text:
                details=[]
                if link.has_attr('href'):
                    details.append(link.attrs['href'])
                    for word in link.find_all('div'):
                        for detail in word.find_all('div'):
                            for detail2 in detail.find_all('div'):
                                details.append(detail2.text)

                newdate=Date.objects.get_or_create(name='date',month=details[1],day=details[2],year=details[3],venue=details[4],town=details[5],ticket=details[0])[0]

if x==1:
    newdate = Date.objects.get_or_create(name='date',month='',day='no upcoming shows',year='',town='',venue='',ticket='')[0]
