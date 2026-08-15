#!/usr/bin/env python3
"""Defines schools_by_topic"""


from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """Specific query search of correct topic"""
    if not mongo_collection:
        return None
    return mongo_collection.find({"topics": topic})