library(jsonlite)


##Set working directory for easy access to brooklyn bridge csv
setwd("C:/Users/aaron/OneDrive/Documents/Columbia Computer Science/Introduction to Data Visualization/Interactive Visualization/")

brooklyn_bridge <- read.csv("Brooklyn_Bridge_Automated_Pedestrian_Counts.csv")
View(brooklyn_bridge)


#convert data frame to list for better json handling
#BB_list <- c()
#for(row in 1:nrow(brooklyn_bridge)){
#  BB_list <- c(BB_list, brooklyn_bridge[row,])
#}
  


#brooklyn_bridge_JSON <- toJSON(brooklyn_bridge, dataframe = "columns")

write_json(brooklyn_bridge, "brooklyn_bridge_pedestrians_json.json")


brooklyn_bridge[,1]

View(brooklyn_bridge_JSON)


sum(brooklyn_bridge[,3])


