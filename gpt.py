!pip install -q openai
import openai
# your secret api key
openai.api_key = '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'

import requests

URL = "https://api.openai.com/v1/chat/completions"

payload = {
"model": "gpt-3.5-turbo",
"messages": [{"role": "user", "content": f"What is the first computer in the world?"}],
"temperature" : 1.0,
"top_p":1.0,
"n" : 1,
"stream": False,
"presence_penalty":0,
"frequency_penalty":0,
}

headers = {
"Content-Type": "application/json",
"Authorization": f"Bearer {openai.api_key}"
}

response = requests.post(URL, headers=headers, json=payload, stream=False)

print(response.content)