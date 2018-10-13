#! /bin/bash
DATA_DIR=/mnt/hgfs/data

if [[ ! -d $DATA_DIR ]]; then
    echo "data directory not find!"
    exit 0
fi

while [ 1 ]
do
    sudo rm $DATA_DIR/*.txt
    echo "load role data to role.txt."
    /root/gamedbd/gamedbd /root/gamedbd/gamesys.conf listrolebrief > $DATA_DIR/tmp.txt 2>&1 &
    iconv -f gb18030 -t utf8 $DATA_DIR/tmp.txt >> $DATA_DIR/role.txt
    sleep 60
done
