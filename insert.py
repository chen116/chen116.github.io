from os import listdir
from os.path import isfile, join


with open("index_template.html") as f:
    lines = f.readlines()
    with open("index.html", "w") as f1:
        f1.writelines(lines)


mypath = './components/'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

print(onlyfiles)
import fileinput,re  

def  modify_file(file_name,pattern,value=""):  
    fh=fileinput.input(file_name,inplace=True)  
    for line in fh:  
        replacement=value + line  
        line=re.sub(pattern,replacement,line)  
    fh.close()  


def insert_to_file(file_name,pattern,content):
    with open("index.html",encoding="utf8") as f:
        lines = f.readlines()
        lineNum_to_insert = 0
        for idx,line in enumerate(lines):
            if pattern in line:
                lineNum_to_insert=idx
        print(pattern,lineNum_to_insert)
        with open("index.html", "w+",encoding="utf8") as f1:
            widx=0
            for line in lines[0:lineNum_to_insert+1]:
                f1.writelines(line)
            f1.write(content)
            for line in lines[lineNum_to_insert+1:]:
                f1.writelines(line)


for eachFile in onlyfiles:
    with open(mypath+eachFile,encoding="utf8") as f:
        content = f.read()
        insert_to_file("index.html",eachFile,content)
