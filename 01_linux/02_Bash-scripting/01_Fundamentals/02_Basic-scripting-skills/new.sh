read -p "Enter your username :" name
echo "you entered: $name"

sudo adduser -m $name
echo "New user added"
