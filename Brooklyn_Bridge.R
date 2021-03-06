library(jsonlite)
library(dplyr)

##Set working directory for easy access to brooklyn bridge csv
setwd("C:/Users/aaron/OneDrive/Documents/Columbia Computer Science/Introduction to Data Visualization/Interactive Visualization/Brooklyn_Bridge/")

brooklyn_bridge <- read.csv("Brooklyn_Bridge_Automated_Pedestrian_Counts.csv")
View(brooklyn_bridge)


#Remove the lat and log values as we will not need them
brooklyn_bridge <- brooklyn_bridge[,-c(9,10,12)]


february <- subset(brooklyn_bridge, gender==2)

typeof(brooklyn_bridge["hour_beginning"])
  

write_json(brooklyn_bridge, "brooklyn_bridge_pedestrians_json.json")


brooklyn_bridge[,1]

View(brooklyn_bridge_JSON)


sum(brooklyn_bridge[,3])


