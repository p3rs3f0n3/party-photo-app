from app.main import app
from mangum import Mangum

application = Mangum(app)
