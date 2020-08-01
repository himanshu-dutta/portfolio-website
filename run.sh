now=$(date +'%Y%m%d_%H%M')
filename="$1_$now.log"
echo "Saving logs at $filename"

cd frontend
npm run build
cd ..

python manage.py collectstatic --noinput
python manage.py runserver >> $filename 2>&1